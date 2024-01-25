import { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import { send } from 'emailjs-com';

import './PopUpQuiz.css';
import image from '../../images/promo/1.jpg'

function PopUpQuiz({ isOpend, close }) {
    const [block, setBlock] = useState(1)
    const [isButtonActive, setButtonActive] = useState(false);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedPhone, setSelectedPhone] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [isChecked, setIsChecked] = useState(true);
    const [isStyle, setStyle] = useState("");
    const [customInput, setCustomInput] = useState("");

    const [sliderValue, setSliderValue] = useState(100);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
        setButtonActive(true)
    };

    useEffect(() => {
        setButtonActive(selectedName.trim() !== '' && selectedPhone.trim() !== '' && isChecked);
    }, [selectedName, selectedPhone, isChecked]);

    useEffect(() => {
        const popup = document.querySelector('.PopUpQuiz')
        function closeByOverlayClick(evt) {
            if (evt.target === evt.currentTarget) {
                close();
            }
        }

        if (isOpend) {
            popup.addEventListener('click', closeByOverlayClick);
            return () => {
                popup.removeEventListener('click', closeByOverlayClick);
            };
        }
    }, [isOpend])

    const handleOptionChange = (event) => {
        setSelectedType(event.target.value);
        setCustomInput("");
        setButtonActive(true);
    };

    const handleOptionPrice = (event) => {
        setSelectedPrice(event.target.value);
        setButtonActive(true);
    };

    const handleOptionTime = (event) => {
        setSelectedTime(event.target.value);
        setButtonActive(true);
    };

    const handleOptionPhone = (event) => {
        setSelectedPhone(event.nativeEvent.target.value);
        setButtonActive(true);
    };

    const handleOptionName = (event) => {
        setSelectedName(event.target.value);
        setButtonActive(true);
    };

    const handleCustomInputChange = (event) => {
        setCustomInput(event.target.value);
        setSelectedType('Другое');
        setButtonActive(!!event.target.value);
    };

    const handleStyleChange = (name) => {
        setStyle(name)
        setButtonActive(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (block !== 6) {
            setBlock(block + 1)
            setButtonActive(false)
        }

        if (block === 6) {
            const result = {
                Type: selectedType,
                Square: sliderValue,
                Style: isStyle,
                Price: selectedPrice,
                Time: selectedTime,
                Name: selectedName,
                Phone: selectedPhone,
            }

            send(
                'service_0z9xsb6', 
                'template_4n9tgsq',
                result,
                '8ZMn8T5ZiI1Sz-ep0'
              )
                .then((response) => {
                  console.log('SUCCESS!', response.status, response.text);
                })
                .catch((err) => {
                  console.log('FAILED...', err);
                });
            close()
        }
    };

    function back() {
        setBlock(block - 1)
    }

    function handleCheckboxChange() {
        setIsChecked(!isChecked)
    }

    const options = [
        {
            'id': '1',
            'name': 'Дома'
        },
        {
            'id': '2',
            'name': 'Квартиры'
        },
        {
            'id': '3',
            'name': 'Офиса'
        },
        {
            'id': '4',
            'name': 'Магазина'
        },
        {
            'id': '5',
            'name': 'Ресторана'
        },
    ]

    const prices = [
        {
            'id': '1',
            'name': 'До 2 млн. рублей'
        },
        {
            'id': '2',
            'name': 'От 2 до 5 млн. рублей'
        },
        {
            'id': '3',
            'name': 'От 5 до 10 млн. рублей'
        },
        {
            'id': '4',
            'name': 'От 10 до 20 млн. рублей'
        },
        {
            'id': '5',
            'name': 'От 20 до 50 млн. рублей'
        },
        {
            'id': '6',
            'name': 'От 50 млн. рублей'
        },
    ]

    const times = [
        {
            'id': '1',
            'name': 'Чем раньше, тем лучше'
        },
        {
            'id': '2',
            'name': 'Сразу по готовности дизайн-проекта'
        },
        {
            'id': '3',
            'name': 'В течение года'
        },
        {
            'id': '4',
            'name': 'Через год или более'
        },
    ]

    return (
        <div className={`PopUpQuiz ${isOpend ? 'PopUpQuiz_opened' : ""}`}>
            <div className="PopUpQuiz__container">
                <div className="PopUpQuiz__container-first">
                    {(block === 1) &&
                        (<>
                            <h2 className="PopUpQuiz__title">Вам необходим дизайн</h2>
                            <div className="PopUpQuiz__container-radio">
                                {
                                    options.map((option) => {
                                        return (
                                            <label className={`PopUpQuiz__lable ${selectedType === option.name ? 'PopUpQuiz__lable_active' : ''}`}>
                                                <input
                                                    type="radio"
                                                    value={option.name}
                                                    checked={selectedType === option.name}
                                                    onChange={handleOptionChange}
                                                    className='PopUpQuiz__input PopUpQuiz__radio'
                                                />
                                                {option.name}
                                            </label>
                                        );
                                    })
                                }

                                <label className={`PopUpQuiz__lable ${selectedType === "Другое" ? 'PopUpQuiz__lable_active' : ''}`}>
                                    <input
                                        type="text"
                                        placeholder="Другое..."
                                        value={customInput}
                                        onChange={handleCustomInputChange}
                                        className="PopUpQuiz__input"
                                    />
                                </label>
                            </div>
                        </>)}
                    {(block === 2) &&
                        (
                            <>
                                <h2 className="PopUpQuiz__title">Какая у вас общая площадь помещения?</h2>
                                <div className="PopUpQuiz__container-squre">
                                    <p className="PopUpQuiz__squre">{sliderValue}</p>
                                    <input
                                        type="range"
                                        min="25"
                                        max="400"
                                        value={sliderValue}
                                        onChange={handleSliderChange}
                                        className="PopUpQuiz__squre_range"
                                    />
                                    <div className="PopUpQuiz__squre_datalist">
                                        <p className="PopUpQuiz__squre_datalist-value">25</p>
                                        <p className="PopUpQuiz__squre_datalist-value">400</p>
                                    </div>
                                </div>
                            </>
                        )}
                    {(block === 3) &&
                        (
                            <>
                                <h2 className="PopUpQuiz__title">В каком стиле вы хотите интерьер?</h2>
                                <div className="PopUpQuiz__container-style">
                                    <div className={`PopUpQuiz__container-style_type ${isStyle === "Luxury" ? 'PopUpQuiz__container-style_type-active' : ''}`} onClick={() => handleStyleChange('Luxury')}>
                                        <img className="PopUpQuiz__container-style_img" src={image} alt='Представление' />
                                        <p className="PopUpQuiz__container-style_text">Luxury</p>
                                    </div>
                                    <div className={`PopUpQuiz__container-style_type ${isStyle === "Минимализм" ? 'PopUpQuiz__container-style_type-active' : ''}`} onClick={() => handleStyleChange('Минимализм')}>
                                        <img className="PopUpQuiz__container-style_img" src={image} alt='Представление' />
                                        <p className="PopUpQuiz__container-style_text">Минимализм</p>
                                    </div>
                                    <div className={`PopUpQuiz__container-style_type ${isStyle === "Арт-деко" ? 'PopUpQuiz__container-style_type-active' : ''}`} onClick={() => handleStyleChange('Арт-деко')}>
                                        <img className="PopUpQuiz__container-style_img" src={image} alt='Представление' />
                                        <p className="PopUpQuiz__container-style_text">Арт-деко</p>
                                    </div>
                                    <div className={`PopUpQuiz__container-style_type ${isStyle === "Скандинавский" ? 'PopUpQuiz__container-style_type-active' : ''}`} onClick={() => handleStyleChange('Скандинавский')}>
                                        <img className="PopUpQuiz__container-style_img" src={image} alt='Представление' />
                                        <p className="PopUpQuiz__container-style_text">Скандинавский</p>
                                    </div>
                                </div>
                            </>
                        )}
                    {(block === 4) &&
                        (
                            <>
                                <h2 className="PopUpQuiz__title">Какой ваш бюджет?</h2>
                                <div className="PopUpQuiz__container-price">
                                    {
                                        prices.map((price) => {
                                            return (
                                                <label className={`PopUpQuiz__lable ${selectedPrice === price.name ? 'PopUpQuiz__lable_active' : ''}`}>
                                                    <input
                                                        type="radio"
                                                        value={price.name}
                                                        checked={selectedPrice === price.name}
                                                        onChange={handleOptionPrice}
                                                        className='PopUpQuiz__input PopUpQuiz__radio'
                                                    />
                                                    {price.name}
                                                </label>
                                            );
                                        })
                                    }
                                </div>
                            </>
                        )}
                    {(block === 5) &&
                        (
                            <>
                                <h2 className="PopUpQuiz__title">Когда вы хотите начать ремонт?</h2>
                                <div className="PopUpQuiz__container-time">
                                    {
                                        times.map((time) => {
                                            return (
                                                <label className={`PopUpQuiz__lable ${selectedTime === time.name ? 'PopUpQuiz__lable_active' : ''}`}>
                                                    <input
                                                        type="radio"
                                                        value={time.name}
                                                        checked={selectedTime === time.name}
                                                        onChange={handleOptionTime}
                                                        className='PopUpQuiz__input PopUpQuiz__radio'
                                                    />
                                                    {time.name}
                                                </label>
                                            );
                                        })
                                    }
                                </div>
                            </>
                        )}
                    {(block === 6) &&
                        (
                            <>
                                <div className="PopUpQuiz__container_form">
                                    <p className="PopUpQuiz__container-form_text">Оставьте телефон: мы с Вами свяжемся для обсуждения индивидуального предложения</p>
                                    <form className="PopUpQuiz__container-form">
                                        <p className="PopUpQuiz__container-form_title">О Вас</p>
                                        <input
                                            type="text"
                                            placeholder="Имя"
                                            value={selectedName}
                                            onChange={handleOptionName}
                                            className="PopUpQuiz__container-form_input"
                                        />
                                        <InputMask
                                            mask='(+7) 999 999 9999'
                                            placeholder="Номер телефона"
                                            value={selectedPhone}
                                            onChange={handleOptionPhone}
                                            className="PopUpQuiz__container-form_input"
                                        >
                                        </InputMask>
                                        <label className="PopUpQuiz__container-form_label">
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={handleCheckboxChange}
                                                className="PopUpQuiz__container-form_checkbox"
                                            />
                                            Я согласен с <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="PopUpQuiz__container-form_link">политикой конфиденциальности</a>
                                        </label>
                                    </form>
                                </div>
                            </>
                        )}
                    <div className="PopUpQuiz__menu">
                        {(block !== 1) &&
                            <p onClick={back} className="PopUpQuiz__previosly">Назад</p>
                        }
                        <button
                            className={`PopUpQuiz__more ${isButtonActive ? 'PopUpQuiz__more-active' : ''}`}
                            onClick={handleSubmit}
                            disabled={!isButtonActive}>
                            {block !== 6 ? 'Далее' : 'Отправить'}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PopUpQuiz;

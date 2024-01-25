import InputMask from 'react-input-mask';
import { useState, useEffect } from "react";
import { send } from 'emailjs-com';


import './Contacts.css';
import Title from '../Title/Title';

function Contacts() {
    const error = document.querySelector('.contacts__form-error')
    const [isButtonActive, setButtonActive] = useState(false);
    const [selectedPhone, setSelectedPhone] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [isChecked, setIsChecked] = useState(true);

    useEffect(() => {
        setButtonActive(selectedName.trim() !== '' && selectedPhone.trim() !== '' && isChecked);
    }, [selectedName, selectedPhone, isChecked]);

    const handleOptionPhone = (event) => {
        setSelectedPhone(event.nativeEvent.target.value);
        setButtonActive(true);
    };

    const handleOptionName = (event) => {
        setSelectedName(event.target.value);
        setButtonActive(true);
    };

    function handleCheckboxChange() {
        setIsChecked(!isChecked)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = {
            Name: selectedName,
            Phone: selectedPhone,
        }

        send(
            'service_0z9xsb6',
            'template_qzc13rc',
            result,
            '8ZMn8T5ZiI1Sz-ep0'
        )
            .then((response) => {
                clear()
                error.classList.remove('contacts__form-error_active')
            })
            .catch((err) => {
                error.classList.add('contacts__form-error_active')
            });

    };

    function clear() {
        setSelectedPhone('')
        setSelectedName('')
    }

    return (
        <section className='contacts' id='contacts'>
            <Title start="Ко" end="нтакты" />
            <div className='contacts__container'>
                <form className='contacts__form' action="submit">
                    <input
                        className='contacts__form-input'
                        type="text"
                        placeholder="Имя"
                        value={selectedName}
                        onChange={handleOptionName}
                    />
                    <InputMask
                        mask='(+7) 999 999 9999'
                        placeholder="Номер телефона"
                        value={selectedPhone}
                        onChange={handleOptionPhone}
                        className="contacts__form-input">
                    </InputMask>
                    <label className="contacts__form_label">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="contacts__form_checkbox"
                        />
                        Я согласен с <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="PopUpQuiz__container-form_link">политикой конфиденциальности</a>
                    </label>
                    <button disabled={!isButtonActive} className='contacts__form-button' onClick={handleSubmit}>Оставить заявку</button>
                    <span className='contacts__form-error'>Произошла ошибка при отправке</span>
                </form>
                <ul className='contacts__list'>
                    <li className='contacts__list-contact'>8 999 999 99 99</li>
                    <li className='contacts__list-contact'>Whats App</li>
                    <li className='contacts__list-contact'>email@mail.ru</li>
                </ul>
            </div>
        </section>
    )
}
export default Contacts;
import { useState } from "react";
import PopUpQuiz from '../PopUpQuiz/PopUpQuiz'

import './PromoQuiz.css'
import promo from '../../images/promo/1.jpg'

function PromoQuiz({ handleopUpQuizOpen, isOpend, close }) {
    const bodyElement = document.querySelector('body');
    const [isWidth, setisWidth] = useState(window.innerWidth);
    const [isPopUpQuiz, setIsPopUpQuiz] = useState(false);

    window.addEventListener('resize', function () {
        setisWidth(window.innerWidth);
    });

    function handleopUpQuizOpens() {
        setIsPopUpQuiz(true)
        bodyElement.style.overflow = 'hidden';
    }

    function closePopUp() {
        setIsPopUpQuiz(false)
        bodyElement.style.overflow = 'auto';
    }


    return (
        <section className="quiz__section">
            <div className="quiz">
                {(isWidth > 750) && (
                    <>
                        <img className="quiz__img" src={promo} alt='Интерьер' />
                        <div className="quiz__info">
                            <p className="quiz__info_text">Узнай стоимость дизайна интерьера под ключ</p>
                            <button onClick={handleopUpQuizOpens} className="quiz__info_button">Пройти тест</button>
                            <PopUpQuiz isOpend={isPopUpQuiz} close={closePopUp} />
                        </div>
                    </>
                )}
                {(isWidth < 751) && (
                    <>
                        <div className="quiz__container">
                            <div className="quiz__img_container">
                                <img className="quiz__img" src={promo} alt='Интерьер' />
                            </div>
                            <p className="quiz__info_text">Узнай стоимость дизайна интерьера под ключ</p>
                            <button onClick={handleopUpQuizOpens} className="quiz__info_button">Пройти тест</button>
                            <PopUpQuiz isOpend={isPopUpQuiz} close={closePopUp} />
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}
export default PromoQuiz;
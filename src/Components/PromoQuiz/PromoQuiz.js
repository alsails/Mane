import { useState } from "react";

import './PromoQuiz.css'
import promo from '../../images/promo/1.jpg'

function PromoQuiz({handleopUpQuizOpen}) {
    const [isWidth, setisWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function () {
        setisWidth(window.innerWidth);
    });


    return (
        <section className="quiz">
            {(isWidth > 750) && (
                <>
                    <img className="quiz__img" src={promo} alt='Интерьер' />
                    <div className="quiz__info">
                        <p className="quiz__info_text">Узнай стоимость дизайна интерьера под ключ</p>
                        <button onClick={handleopUpQuizOpen} className="quiz__info_button">Пройти тест</button>
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
                        <button onClick={handleopUpQuizOpen} className="quiz__info_button">Пройти тест</button>
                    </div>
                </>
            )}
        </section>
    )
}
export default PromoQuiz;
import PopUpQuiz from '../PopUpQuiz/PopUpQuiz'
import { useState } from "react";

import Title from '../Title/Title';
import './Price.css'

function Price() {
    const bodyElement = document.querySelector('body');
    const [isPopUpQuiz, setIsPopUpQuiz] = useState(false);

    function handleopUpQuizOpens() {
        setIsPopUpQuiz(true)
        bodyElement.style.overflow = 'hidden';
    }

    function closePopUp() {
        setIsPopUpQuiz(false)
        bodyElement.style.overflow = 'auto';
    }
    return (
        <section className='price__section' id='price'>
            <div className='price'>
                <Title start='Ор' end='иентировочная стоимость услуг' />
                <div className='price__container'>
                    <div className='price__card'>
                        <h3 className='price__card-title'>Дизайн-проект</h3>
                        <div className='price__card-about'>
                            <p className='price__card-about_text'>Оформляется договором.</p>
                            <p className='price__card-about_text'>Проект оплачивается поэтапно. На каждом этапе подписывается Акт выполненных работ.</p>
                        </div>
                        <p className='price__card-price'>4 000 руб/м2</p>
                    </div>
                    <div className='price__card'>
                        <h3 className='price__card-title'>Комплектация</h3>
                        <div className='price__card-about'>
                            <p className='price__card-about_text'>Оформляется договором.</p>
                            <p className='price__card-about_text'>Cоставляется смета и детально рассчитывается бюджет проекта.</p>
                        </div>
                        <p className='price__card-price'>1 000 руб/м2</p>
                    </div>
                    <div className='price__card'>
                        <h3 className='price__card-title'>Авторский надзор</h3>
                        <div className='price__card-about'>
                            <p className='price__card-about_text'>Оформляется договором.</p>
                            <p className='price__card-about_text'>Начинается одновременно с ремонтными работами.</p>
                            <p className='price__card-about_text'>Оплачивается в начале каждого месяца.</p>
                        </div>
                        <p className='price__card-price'>50 000 руб/мес</p>
                    </div>
                </div>
                <PopUpQuiz isOpend={isPopUpQuiz} close={closePopUp} />
                <p className='price__info'>Для точного расчета заполните <button className='price__info-button' onClick={handleopUpQuizOpens}>форму обратной связи</button>.</p>
            </div>
        </section>
    )
}
export default Price;

import Title from '../Title/Title';
import './AboutUs.css';
import british from '../../images/education/british.jpg'
import national from '../../images/education/national.jpg'
import school from '../../images/education/school.png'
import university from '../../images/education/university.png'

import magneto from '../../images/partners/magneto.png'
import provanse from '../../images/partners/provanse.jpeg'
import seasons from '../../images/partners/seasons.jpg'
import shato from '../../images/partners/shato.jpg'
import smeg from '../../images/partners/smeg.jpg'
import soltex from '../../images/partners/soltex.png'
import krok from '../../images/partners/krok.jpg'

import igor from '../../images/person/igor.jpeg'
import julia from '../../images/person/julia.jpg'

function AboutUs() {
    return (
        <section className='about' id='aboutUs'>
            <Title start="О" end=" нас" />
            <div className='about__container'>
                <div className='about__info'>
                    <p className='about__info_text'>
                        Студия дизайна <span className='about__info_name'>MA</span><span className='about__info_name'>NE</span> 
                        - это проектирование и дизайн, креатив и функциональность, это качество и сроки, стиль и новаторство.
                    </p>
                    <p className='about__info_text'>
                        Одним из приоритетных направлений работы <span className='about__info_name'>MA</span><span className='about__info_name'>NE</span> является 
                        дизайн корпоративных и общественных пространств.
                    </p>
                    <p className='about__info_text'>
                        Команда студии разрабатывает дизайн для бизнеса, который приносит комфорт сотрудникам и прибыль владельцам.
                    </p>
                    <p className='about__info_text'>
                        Проекты всегда имеют свою "фишку", свою идею, что отражается в дизайне.
                    </p>
                    <p className='about__info_text about__info_text-bold'>
                        Мы готовы взять на себя задачи любой сложности, чтобы облегчить вам жизнь!
                    </p>
                </div>
                <div className='about__person'>
                    <div className='about__person_img-container'><img className='about__person_img' src={julia}></img></div>
                    <div className='about__person_img-container'><img className='about__person_img' src={igor}></img></div>
                </div>
            </div>
            <div className='about__statistics'>
                    <div className='about__statistics_container'>
                        <p className='about__statistics_number'>50+</p>
                        <p className='about__statistics_text'>реализованных проектов</p>
                    </div>
                    <div className='about__statistics_container'>
                        <p className='about__statistics_number'>20</p>
                        <p className='about__statistics_text'>лет опыта</p>
                    </div>
                    <div className='about__statistics_container'>
                        <p className='about__statistics_number'>100%</p>
                        <p className='about__statistics_text'>гарантия качества</p>
                    </div>
            </div>
            <div className='aboutUs__container'>
                <div className='education__container'>
                    <p className='education__info'><span className='education__info_name'>НАШЕ</span>   <span className='education__info_name'>ОБРАЗОВАНИЕ</span></p>
                    <img className='education__info_img' src={british}></img>
                    <img className='education__info_img' src={national}></img>
                    <img className='education__info_img' src={school}></img>
                    <img className='education__info_img' src={university}></img>
                </div>
                <div className='partners__container'>
                    <p className='education__info'><span className='education__info_name'>С НАМИ</span>   <span className='education__info_name'>РАБОТАЮТ</span></p>
                    <div className='partners__cintainer_img'>
                        <img className='partners__info_img' src={smeg}></img>
                        <img className='partners__info_img partners__info_img-mid' src={krok}></img>
                        <img className='partners__info_img' src={provanse}></img>
                        <img className='partners__info_img' src={shato}></img>
                        <img className='partners__info_img' src={seasons}></img>
                        <img className='partners__info_img' src={magneto}></img>
                        <img className='partners__info_img' src={soltex}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutUs;

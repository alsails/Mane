import Title from '../Title/Title';
import './AboutUs.css';

function AboutUs() {
    return (
        <section className='about' id='aboutUs'>
            <Title start="О" end=" нас" />
            <div className='about__container'>
                <div className='about__info'>
                    <p className='about__info_text'>Студия <span className='about__info_name'>MA</span><span className='about__info_name'>NE</span> - более 20 лет на вершине популярности в дизайне интерьеров. Мы создаём уют и подчеркиваем индивидуальность.</p>
                    <p className='about__info_text'>Мы не ограничиваемся созданием уюта, мы вдохновляем и преображаем интерьеры так, чтобы они стали отражением вашей уникальной личности.</p>
                    <p className='about__info_text'>Готовы привнести магию в ваш дом или бизнес? Доверьтесь опыту и профессионализму нашей студии и сделайте ваш интерьер идеальным.</p>
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
            </div>
        </section>
    )
}
export default AboutUs;

import Title from '../Title/Title';
import './Price.css'

function Price() {
    return (
        <section className='price'>
            <Title start='Ст' end='оимость услуг' />
            <div className='price__container'>
                <div className='price__card'>
                    <p className='price__card-title'>Дизайн-проект</p>
                    <div className='price__card-about'>
                        <p className='price__card-about_text'>Оформляется договором.</p>
                        <p className='price__card-about_text'>Проект оплачивается поэтапно. На каждом этапе подписывается Акт выполненных работ.</p>
                    </div>
                    <p className='price__card-price'>4 000 руб/м2</p>
                </div>
                <div className='price__card'>
                    <p className='price__card-title'>Комплектация</p>
                    <div className='price__card-about'>
                        <p className='price__card-about_text'>Оформляется договором.</p>
                        <p className='price__card-about_text'>Cоставляется смета и детально рассчитывается бюджет проекта.</p>
                    </div>
                    <p className='price__card-price'>1 000 руб/м2</p>
                </div>
                <div className='price__card'>
                    <p className='price__card-title'>Авторский надзор</p>
                    <div className='price__card-about'>
                        <p className='price__card-about_text'>Оформляется договором.</p>
                        <p className='price__card-about_text'>Начинается одновременно с ремонтными работами.</p>
                        <p className='price__card-about_text'>Оплачивается в начале каждого месяца.</p>
                    </div>
                    <p className='price__card-price'>50 000 руб/мес</p>
                </div>
            </div>
        </section>
    )
}
export default Price;

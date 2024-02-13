import './AboutPrice.css';
import { useState } from "react";

function AboutPrice() {
    const [isBlock, setIsBlock] = useState('first');
    const [isBlock2, setIsBlock2] = useState('first');

    function changeBlock(name) {
        setIsBlock(name)
    }

    function changeBlock2(name) {
        setIsBlock2(name)
    }

    return (
        <section className='aboutPrice'>
            <div className='aboutPrice__container'>
                <p className='aboutPrice__container_quote'>
                    <b>Создание индивидуального интерьера</b> — это прежде всего создание неуловимой атмосферы гармоничного пространства и законченности.
                    Мы добиваемся этой легкости и простоты путем многочисленных вариантов планировок, создания коллажей и бордов с образцами реальных материалов, подбора мебели, освещения, сантехники, декора и аксессуаров.
                    Мы изучаем психологию цвета, света и их воздействие на человека, сохраняя индивидуальный подход в решении дизайн-проекта.
                </p>
                <h3 className='aboutPrice__container_title'>Создание дизайн-проекта</h3>
                <p className='aboutPrice__container_text'>Мы начинаем с разработки идеи и ведем проект до финишной отделки помещения, расстановки мебели и аксессуаров.</p>
                <p className='aboutPrice__container_text'>
                    Минимум 5 рабочих дней мы отводим на разработку Технического задания с учетом всей полученной от заказчика информации. Этот документ будет четким, ясным, понятным,
                    позволит учесть пожелания всех участников процесса и не сбиваться с выбранного курса.
                </p>
                <div className={`aboutPrice__project-slider ${isBlock === 'second' ? 'aboutPrice__project-slider_second' : ''} ${isBlock === 'third' ? 'aboutPrice__project-slider_third' : ''}`}>
                    <div onClick={() => changeBlock('first')} className={`aboutPrice__project aboutPrice__project-first ${isBlock === 'first' ? 'aboutPrice__project-active' : ''}`}>
                        <h4 className={`aboutPrice__project_title ${isBlock === 'first' ? 'aboutPrice__project_title-active' : ''}`}>1-й этап – Техзадание</h4>
                        <ul className={`aboutPrice__project_list ${isBlock === 'first' ? '' : 'aboutPrice__project_list-hidden'}`}>
                            <li className='aboutPrice__project_list-text'>Знакомство на объекте</li>
                            <li className='aboutPrice__project_list-text'>Анкетирование и анализ информационных материалов, предоставленных Заказчиком.</li>
                            <li className='aboutPrice__project_list-text'>Анализ инженерных сетей и коммуникаций.</li>
                            <li className='aboutPrice__project_list-text'>Функциональное зонирование пространства.</li>
                            <li className='aboutPrice__project_list-text'>Проведение обмеров, рабочий обмерный чертеж, фотофиксация.</li>
                            <li className='aboutPrice__project_list-text'>Составление технического задания (документ-приложение  к договору).</li>
                            <li className='aboutPrice__project_list-text'>Определение бюджета (ориентировочно, для понимания бюджетных рамок по материалам и мебели).</li>
                        </ul>
                    </div>
                    <div onClick={() => changeBlock('second')} className={`aboutPrice__project aboutPrice__project-second ${isBlock === 'second' ? 'aboutPrice__project-active' : ''}`}>
                        <h4 className={`aboutPrice__project_title ${isBlock === 'second' ? 'aboutPrice__project_title-active' : ''}`}>2-й этап – Эскизный проект</h4>
                        <ul className={`aboutPrice__project_list ${isBlock === 'second' ? '' : 'aboutPrice__project_list-hidden'}`}>
                            <li className='aboutPrice__project_list-text'>Отрисовка обмерочного чертежа квартиры.</li>
                            <li className='aboutPrice__project_list-text'>Подготовка вариантов планировочных решений с расстановкой мебели.</li>
                            <li className='aboutPrice__project_list-text'>Разработка стилевого коллажа.</li>
                            <li className='aboutPrice__project_list-text'>Разработка перспектив комнат.</li>
                            <li className='aboutPrice__project_list-text'>Визуализация проекта.</li>
                            <li className='aboutPrice__project_list-text'> Подбор отделочных материалов, мебели, сантехнического оборудования, бытовой техники и т.д.</li>
                        </ul>
                    </div>
                    <div onClick={() => changeBlock('third')} className={`aboutPrice__project aboutPrice__project-third ${isBlock === 'third' ? 'aboutPrice__project-active' : ''}`}>
                        <h4 className={`aboutPrice__project_title ${isBlock === 'third' ? 'aboutPrice__project_title-active' : ''}`}>3-й этап – Альбом чертежей</h4>
                        <ul className={`aboutPrice__project_list ${isBlock === 'third' ? '' : 'aboutPrice__project_list-hidden'}`}>
                            <li className='aboutPrice__project_list-text'>Создание альбома чертежей с рабочей документацией, визуализациями  и спецификациями, необходимыми для строительной бригады.</li>
                            <li className='aboutPrice__project_list-text'>С чертежами, которые входят в рабочий проект можно ознакомиться в рамках подписания договора или запросить по почте альбом рабочей документации.</li>
                        </ul>
                    </div>
                </div>

                <h3 className='aboutPrice__container_title'>Реализация</h3>
                <p className='aboutPrice__container_text'>
                    После утверждения дизайн-проекта можно приступать к его воплощению. Здесь как нигде важна четкая схема работы.
                    Поэтому мы заключаем отдельный договор на ведение Авторского надзора и так же разбиваем его на этапы.
                </p>
                <div className={`aboutPrice__release-slider ${isBlock2 === 'second' ? 'aboutPrice__release-slider_second' : ''} ${isBlock2 === 'third' ? 'aboutPrice__release-slider_third' : ''} ${isBlock2 === 'fourth' ? 'aboutPrice__release-slider_fourth' : ''}`}>
                    <div onClick={() => changeBlock2('first')} className={`aboutPrice__release aboutPrice__release-first ${isBlock2 === 'first' ? 'aboutPrice__release-active' : ''}`}>
                        <h4 className={`aboutPrice__release_title ${isBlock2 === 'first' ? 'aboutPrice__release_title-active' : ''}`}>Подготовительный этап</h4>
                        <p className={`aboutPrice__release_text ${isBlock2 === 'first' ? '' : 'aboutPrice__release_text-hidden'}`}>Утверждаем смету, график строительных работ, график закупок и план финансирования.</p>
                    </div>
                    <div onClick={() => changeBlock2('second')} className={`aboutPrice__release aboutPrice__release-second ${isBlock2 === 'second' ? 'aboutPrice__release-active' : ''}`}>
                        <h4 className={`aboutPrice__release_title ${isBlock2 === 'second' ? 'aboutPrice__release_title-active' : ''}`}>Основной этап</h4>
                        <p className={`aboutPrice__release_text ${isBlock2 === 'second' ? '' : 'aboutPrice__release_text-hidden'}`}>
                            Закупаем отделочные материалы и оборудование, делаем выкрасы и образцы заказных элементов,
                            контролируем правильное исполнение дизайн-проекта и своевременно вносим корректировки в чертежи,
                            если это требуется после демонтажа перегородок или при выявлении новых обстоятельств на объекте.
                        </p>
                    </div>
                    <div onClick={() => changeBlock2('third')} className={`aboutPrice__release aboutPrice__release-third ${isBlock2 === 'third' ? 'aboutPrice__release-active' : ''}`}>
                        <h4 className={`aboutPrice__release_title ${isBlock2 === 'third' ? 'aboutPrice__release_title-active' : ''}`}>Декорирование</h4>
                        <p className={`aboutPrice__release_text ${isBlock2 === 'third' ? '' : 'aboutPrice__release_text-hidden'}`}>Когда строительные работы завершены, переходим к выбору текстиля, аксессуаров и предметов декора.</p>
                    </div>
                    <div onClick={() => changeBlock2('fourth')} className={`aboutPrice__release aboutPrice__release-fourth ${isBlock2 === 'fourth' ? 'aboutPrice__release-active' : ''}`}>
                        <h4 className={`aboutPrice__release_title ${isBlock2 === 'fourth' ? 'aboutPrice__release_title-active' : ''}`}>Фотосъемка</h4>
                        <p className={`aboutPrice__release_text ${isBlock2 === 'fourth' ? '' : 'aboutPrice__release_text-hidden'}`}>Всегда приятно зафиксировать проделанную работу! Наводим красоту и вызываем профессионального стилиста и фотографа для создания памятного альбома интерьера.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutPrice;

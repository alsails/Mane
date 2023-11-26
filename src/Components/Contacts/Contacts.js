import './Contacts.css';
import Title from '../Title/Title';

function Contacts() {
    return (
        <section className='contacts' id='contacts'>
            <Title start="Ко" end="нтакты" />
            <div className='contacts__container'>
                <form className='contacts__form' action="submit">
                    <input
                        className='contacts__form-input'
                        type="text"
                        id="name-input"
                        name="name"
                        placeholder="Имя"
                        required />
                    <input 
                    className='contacts__form-input'
                    type="email"
                    id="email-input"
                    name="email"
                    placeholder="Email"
                    required/>
                    <input 
                    className='contacts__form-input'
                    type="text"
                    id="phone-input"
                    name="phone"
                    placeholder="Номер телефона"
                    required/>
                    <input 
                    className='contacts__form-input'
                    type="text"
                    id="square-input"
                    name="square"
                    placeholder="Площадь помещения"
                    required/>
                    <button className='contacts__form-button' type="submit">Оставить заявку</button>
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

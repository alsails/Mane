import { Link } from "react-scroll";

import './Footer.css';
import Logo from '../../images/logo.png'

function Footer() {
    return (
        <footer className='footer'>
            <img src={Logo} alt='Логотип Mano' className='footer__logo' />
            <nav className='footer__nav-links'>
                <li className='footer__nav-link'>
                    <Link
                        to="aboutUs"
                        className="nav__link"
                        smooth={true}
                        duration={1000}
                    >
                        О нас
                    </Link>
                </li>
                <li className='footer__nav-link'>
                    <Link
                        to="portfolio"
                        className="nav__link"
                        smooth={true}
                        duration={1000}
                    >
                        Портфолио
                    </Link>
                </li>
                <li className='footer__nav-link'>
                    <Link
                        to="contacts"
                        className="nav__link"
                        smooth={true}
                        duration={1000}
                    >
                        Контакты
                    </Link>
                </li>
            </nav>
        </footer>
    )
}
export default Footer;

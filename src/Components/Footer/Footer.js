import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

import './Footer.css';
import Logo from '../../images/logo.png'

function Footer() {
    const allowedUrls = ['/'];
    const location = useLocation();
    const [isAllowedUrl, setIsAllowedUrl] = useState(true);

    useEffect(() => {
        setIsAllowedUrl(allowedUrls.includes(location.pathname));
    }, [location.pathname]);

    console.log('location', location.pathname)
    console.log('allowedUrls', allowedUrls)
    console.log('isAllowedUrl', isAllowedUrl)

    return (
        <footer className='footer__container'>
            <div className="footer">
                <NavLink
                    to={`/`}
                    className="footer__logo"
                >
                    <img src={Logo} alt='Логотип Mano' className='footer__logo' />
                </NavLink>
                <div className="footer__info"></div>
            </div>
            {isAllowedUrl && (
                <nav className="footer__nav">
                    <li className="footer__nav-link">
                        <NavLink
                            to={`/requisites`}
                            className="footer__nav-link-text"
                        >
                            Реквизиты
                        </NavLink>
                    </li>
                    <li className="footer__nav-link">
                        <NavLink
                            to={`/politics`}
                            className="footer__nav-link-text"
                        >
                            Политика о персональных данных
                        </NavLink>
                    </li>
                </nav>
            )}
        </footer>
    )
}
export default Footer;

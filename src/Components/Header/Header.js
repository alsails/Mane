import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import './Header.css';
import Logo from '../../images/logo.png'

function Header() {
  const [isWidth, setisWidth] = useState(window.innerWidth);

  window.addEventListener('resize', function () {
    setisWidth(window.innerWidth);
  });

  return (
    <header className='header'>
      {(isWidth > 650) && (
        <div className="header__container">
          <NavLink className='header__logo' to={`/`}>
            <img src={Logo} alt='Логотип Mano' className='header__logo' />
          </NavLink>
          <nav className='header__nav-links'>
            <li className='header__nav-link'>
              <Link
                to="aboutUs"
                className="nav__link"
                smooth={true}
                duration={1000}
              >
                О нас
              </Link>
            </li>
            <li className='header__nav-link'>
              <Link
                to="portfolio"
                className="nav__link"
                smooth={true}
                duration={1000}
              >
                Портфолио
              </Link>
            </li>
            <li className='header__nav-link'>
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
          <p className='header__phone'>8 999 999 99 99</p>
        </div>
      )}
      {(isWidth < 651) &&
        <div className="header__container_small">
          <img src={Logo} alt='Логотип Mano' className='header__logo_small' />
        </div>
      }
    </header>
  )
}
export default Header;

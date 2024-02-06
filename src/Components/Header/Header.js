import { Link, scroller } from "react-scroll";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import './Header.css';
import Logo from '../../images/logo.png'
import PopUpMenu from '../PopUpMenu/PopUpMenu'

function Header() {
  const [isPopUpMenuOpen, setIsPopUpMenuOpen] = useState(false);
  const [isWidth, setisWidth] = useState(window.innerWidth);
  const bodyElement = document.querySelector('body');
  const location = useLocation();
  const navigate = useNavigate();

  window.addEventListener('resize', function () {
    setisWidth(window.innerWidth);
  });

  function handleAboutUsClick(block) {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scroller.scrollTo(block, {
          smooth: true,
          duration: block === "contacts" ? 2500 : 1000
        });
      }, 100);
    }
  }

  function handlePopUpMenuOpen() {
    setIsPopUpMenuOpen(true)
    bodyElement.style.overflow = 'hidden';
  }

  function closePopUp() {
    setIsPopUpMenuOpen(false)
    bodyElement.style.overflow = 'auto';
  }


  return (
    <>
      <header className={`header ${isWidth > 650 ? 'sticky' : ''}`} >
        {(isWidth > 650) && (
          <div className="header__container">
            <NavLink className='header__logo' to={`/`}>
              <img src={Logo} alt='Логотип Mano' className='header__logo' />
            </NavLink>
            <nav className='header__nav-links'>
              <li className='header__nav-link'>
                <Link
                  to={location.pathname === "/" ? "aboutUs" : ""}
                  className="nav__link"
                  smooth={true}
                  duration={1000}
                  onClick={() => handleAboutUsClick('aboutUs')}
                >
                  О нас
                </Link>
              </li>
              <li className='header__nav-link'>
                <Link
                  to={location.pathname === "/" ? "price" : ""}
                  className="nav__link"
                  smooth={true}
                  duration={2000}
                  onClick={() => handleAboutUsClick('price')}
                >
                  Услуги
                </Link>
              </li>
              <li
                className='header__nav-link'>
                <Link
                  className="nav__link"
                  onClick={handlePopUpMenuOpen}
                >
                  Портфолио
                </Link>
              </li>      
              <li className='header__nav-link'>
                <Link
                  to={location.pathname === "/" ? "reviews" : ""}
                  className="nav__link"
                  smooth={true}
                  duration={2000}
                  onClick={() => handleAboutUsClick('reviews')}
                >
                  Отзывы
                </Link>
              </li>
              <li className='header__nav-link'>
                <Link
                  to={location.pathname === "/" ? "contacts" : ""}
                  className="nav__link"
                  smooth={true}
                  duration={2000}
                  onClick={() => handleAboutUsClick('contacts')}
                >
                  Контакты
                </Link>
              </li>
            </nav>
            <p className='header__phone'>8 916 672 62 25</p>
          </div>
        )}
        {(isWidth < 651) &&
          <div className="header__container_small">
            <img src={Logo} alt='Логотип Mano' className='header__logo_small' />
          </div>
        }
        <PopUpMenu isOpend={isPopUpMenuOpen} close={closePopUp} />
      </header>
    </>
  )
}
export default Header;

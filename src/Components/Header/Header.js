import { Link, scroller } from "react-scroll";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import './Header.css';
import Logo from '../../images/logo.png'
import PopUpMenu from '../PopUpMenu/PopUpMenu'
import Menu from "../Menu/Menu";

function Header() {
  const [isPopUpMenuOpen, setIsPopUpMenuOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isWidth, setisWidth] = useState(window.innerWidth);
  const bodyElement = document.querySelector('body');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      setisWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function scrollToBlock(block) {
    scroller.scrollTo(block, {
      smooth: true,
      duration: block === "contacts" ? 2500 : 1000
    });
  }


  function togglePopup() {
    isOpened ? closeAllPopup() : openPopupMenu()
  }

  function handleAboutUsClick(block) {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollToBlock(block);
      }, 100);
    } else {
      scrollToBlock(block);
    }
  }

  function openPopupMenu() {
    setIsOpened(true)
  }

  function handlePopUpMenuOpen() {
    setIsPopUpMenuOpen(true)
    bodyElement.style.overflow = 'hidden';
  }

  function closeAllPopup() {
    setIsOpened(false)
    setIsPopUpMenuOpen(false)
    bodyElement.style.overflow = 'auto';
  }


  return (
    <>
      <header className={`header ${isWidth > 650 ? 'sticky' : ''}`} >
        {(isWidth > 650) && (
          <div className="header__container">
            <NavLink className='header__logo_container' to={`/`}>
              <img src={Logo} alt='Логотип Mano' className='header__logo' />
              <div className="red__line"></div>
            </NavLink>
            <nav className='header__nav-links'>
              <li className='header__nav-link'>
                {location.pathname === "/" ? (
                  <Link
                    to="aboutUs"
                    className="nav__link"
                    smooth={true}
                    duration={1000}
                  >
                    О нас
                  </Link>
                ) : (
                  <button type="button" className="nav__link" onClick={() => handleAboutUsClick('aboutUs')}>
                    О нас
                  </button>
                )}
              </li>
              <li className='header__nav-link'>
                {location.pathname === "/" ? (
                  <Link
                    to="price"
                    className="nav__link"
                    smooth={true}
                    duration={2000}
                  >
                    ???????
                  </Link>
                ) : (
                  <button type="button" className="nav__link" onClick={() => handleAboutUsClick('price')}>
                    ???????
                  </button>
                )}
              </li>
              <li
                className='header__nav-link'>
                <button
                  type="button"
                  className="nav__link"
                  onClick={handlePopUpMenuOpen}
                >
                  ???????????
                </button>
              </li>
              <li className='header__nav-link'>
                {location.pathname === "/" ? (
                  <Link
                    to="reviews"
                    className="nav__link"
                    smooth={true}
                    duration={2000}
                  >
                    ??????
                  </Link>
                ) : (
                  <button type="button" className="nav__link" onClick={() => handleAboutUsClick('reviews')}>
                    ??????
                  </button>
                )}
              </li>
              <li className='header__nav-link'>
                {location.pathname === "/" ? (
                  <Link
                    to="contacts"
                    className="nav__link"
                    smooth={true}
                    duration={2000}
                  >
                    ?????????
                  </Link>
                ) : (
                  <button type="button" className="nav__link" onClick={() => handleAboutUsClick('contacts')}>
                    ?????????
                  </button>
                )}
              </li>
            </nav>
            <p className='header__phone'>8 916 672 62 25</p>
          </div>
        )}
        {(isWidth < 651) &&
          <>
            <div className="header__container_small">
              <NavLink className='header__logo_container' to={`/`}>
                <img src={Logo} alt='Логотип Mano' className='header__logo_small' />
              </NavLink>

              <div onClick={togglePopup} className={`header__hamburger-menu ${isOpened ? 'header__hamburger-menu_active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </>
        }
        <PopUpMenu isOpend={isPopUpMenuOpen} close={closeAllPopup} />
        <Menu isOpened={isOpened} close={closeAllPopup}/>
      </header>
    </>
  )
}
export default Header;

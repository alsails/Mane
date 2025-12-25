import './Menu.css';
import { useEffect } from 'react';
import { Link, scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

function Menu({ isOpened, close }) {
    const location = useLocation();
    const navigate = useNavigate();

    function scrollToBlock(block) {
        scroller.scrollTo(block, {
            smooth: true,
            duration: block === "contacts" ? 2500 : 1000
        });
    }

    function handleAboutUsClick(block) {
        close()
        if (location.pathname !== "/") {
            navigate("/");

            setTimeout(() => {
                scrollToBlock(block);
            }, 100);
        } else {
            scrollToBlock(block);
        }
    }

    useEffect(() => {
        const popup = document.querySelector('.popupMenu_active')
        function closeByOverlayClick(evt) {
            if (evt.target === evt.currentTarget) {
                close();
            }
        }

        if (isOpened) {
            popup.addEventListener('click', closeByOverlayClick);
            return () => {
                popup.removeEventListener('click', closeByOverlayClick);
            };
        }
    }, [isOpened, close])

    return (
        <div className={`popupMenu ${isOpened ? 'popupMenu_active' : ''}`}>
            <div className='popupMenu__container'>
                <ul className='popupMenu__links'>
                    <li className='popupMenu__links-link'>
                        {location.pathname === "/" ? (
                          <Link
                            to="aboutUs"
                            className="popupMenu__link"
                            smooth={true}
                            duration={1000}
                            onClick={close}
                          >
                            О нас
                          </Link>
                        ) : (
                          <button type="button" className="popupMenu__link" onClick={() => handleAboutUsClick('aboutUs')}>
                            О нас
                          </button>
                        )}
                    </li>
                    <li className='popupMenu__links-link'>
                        {location.pathname === "/" ? (
                          <Link
                            to="price"
                            className="popupMenu__link"
                            smooth={true}
                            duration={2000}
                            onClick={close}
                          >
                            Услуги
                          </Link>
                        ) : (
                          <button type="button" className="popupMenu__link" onClick={() => handleAboutUsClick('price')}>
                            Услуги
                          </button>
                        )}
                    </li>
                    <li className='popupMenu__links-link'>
                        {location.pathname === "/" ? (
                          <Link
                            to="portfolio"
                            className="popupMenu__link"
                            smooth={true}
                            duration={2000}
                            onClick={close}
                          >
                            Портфолио
                          </Link>
                        ) : (
                          <button type="button" className="popupMenu__link" onClick={() => handleAboutUsClick('portfolio')}>
                            Портфолио
                          </button>
                        )}
                    </li>
                    <li className='popupMenu__links-link'>
                        {location.pathname === "/" ? (
                          <Link
                            to="reviews"
                            className="popupMenu__link"
                            smooth={true}
                            duration={2000}
                            onClick={close}
                          >
                            Отзывы
                          </Link>
                        ) : (
                          <button type="button" className="popupMenu__link" onClick={() => handleAboutUsClick('reviews')}>
                            Отзывы
                          </button>
                        )}
                    </li>
                    <li className='popupMenu__links-link'>
                        {location.pathname === "/" ? (
                          <Link
                            to="contacts"
                            className="popupMenu__link"
                            smooth={true}
                            duration={2000}
                            onClick={close}
                          >
                            Контакты
                          </Link>
                        ) : (
                          <button type="button" className="popupMenu__link" onClick={() => handleAboutUsClick('contacts')}>
                            Контакты
                          </button>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;

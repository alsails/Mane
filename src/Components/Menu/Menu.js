import './Menu.css';
import { useEffect } from 'react';
import { Link, scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

function Menu({ isOpened, close }) {
    const location = useLocation();
    const navigate = useNavigate();

    function handleAboutUsClick(block) {
        close()
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
    }, [isOpened])

    return (
        <div className={`popupMenu ${isOpened ? 'popupMenu_active' : ''}`}>
            <div className='popupMenu__container'>
                <ul className='popupMenu__links'>
                    <li className='popupMenu__links-link'>
                        <Link
                            to={location.pathname === "/" ? "aboutUs" : ""}
                            className="popupMenu__link"
                            smooth={true}
                            duration={1000}
                            onClick={() => handleAboutUsClick('aboutUs')}
                        >
                            О нас
                        </Link>
                    </li>
                    <li className='popupMenu__links-link'>
                        <Link
                            to={location.pathname === "/" ? "price" : ""}
                            className="popupMenu__link"
                            smooth={true}
                            duration={2000}
                            onClick={() => handleAboutUsClick('price')}
                        >
                            Услуги
                        </Link>
                    </li>
                    <li
                        className='popupMenu__links-link'>
                        <Link
                            to={location.pathname === "/" ? "portfolio" : ""}
                            className="popupMenu__link"
                            smooth={true}
                            duration={2000}
                            onClick={() => handleAboutUsClick('portfolio')}
                        >
                            Портфолио
                        </Link>
                    </li>
                    <li className='popupMenu__links-link'>
                        <Link
                            to={location.pathname === "/" ? "reviews" : ""}
                            className="popupMenu__link"
                            smooth={true}
                            duration={2000}
                            onClick={() => handleAboutUsClick('reviews')}
                        >
                            Отзывы
                        </Link>
                    </li>
                    <li className='popupMenu__links-link'>
                        <Link
                            to={location.pathname === "/" ? "contacts" : ""}
                            className="popupMenu__link"
                            smooth={true}
                            duration={2000}
                            onClick={() => handleAboutUsClick('contacts')}
                        >
                            Контакты
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;
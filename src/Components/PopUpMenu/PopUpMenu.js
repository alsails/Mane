import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import './PopUpMenu.css';
import { Categories } from '../../Utils/PortfolioCards'

function PopUpMenu({ isOpend, close }) {
    useEffect(() => {
        const popup = document.querySelector('.PopUpMenu')
        function closeByOverlayClick(evt) {
            if (evt.target === evt.currentTarget) {
                close();
            }
        }

        if (isOpend) {
            popup.addEventListener('click', closeByOverlayClick);
            return () => {
                popup.removeEventListener('click', closeByOverlayClick);
            };
        }
    }, [isOpend])




    return (
        <div className={`PopUpMenu ${isOpend ? 'PopUpMenu_opened' : ""}`}>
            <div className="PopUpMenu__container">
                <nav className="PopUpMenu__lists">
                    {
                        Categories.map((item) =>
                            <li className="PopUpMenu__list">
                                <NavLink
                                    to={`/portfolio/${item.id}`}
                                    className="PopUpMenu__list"
                                    onClick={close}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        )
                    }
                </nav>
            </div>
        </div>
    )
}
export default PopUpMenu;

import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import './Project.css';
import { Com } from '../../Utils/PortfolioCards'

function Project() {
    const { projectId } = useParams();
    const item = Com.find(item => item.id === projectId);
    var images = item.images
    var texts = item.info

    const [isWidth, setisWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function () {
        setisWidth(window.innerWidth);
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <section className='project'>
            <div className='project__cover'>
                <img className='project__cover-img' alt={item.name} src={item.images[0]} />
                <p className='project__cover-text project__cover-type'>{item.type}</p>
                <p className='project__cover-text project__cover-name'>{item.name}</p>
                {item.square && <p className='project__cover-text project__cover-square'>Общая площадь помещения {item.square} кв.м</p>}
            </div>
            {item.info &&
                <div className='project__info'>
                    {(isWidth > 900) && (
                        <img className='project__info-img' alt={item.name} src={item.images[1]} />
                    )}
                    <div className='project__info-texts'>
                        {
                            texts.map((text) =>
                                <p className='project__info-text'>{text}</p>
                            )
                        }
                    </div>
                </div>
            }
            <div className='project__images'>
                {
                    images.slice(2, images.length).map((image) =>
                        <img className='project__image' alt={item.name} src={image} />
                    )
                }
            </div>
        </section>
    )
}
export default Project;

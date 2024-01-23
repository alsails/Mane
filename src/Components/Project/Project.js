import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import './Project.css';
import { Com } from '../../Utils/PortfolioCards'

function Project() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

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

    const slice_point = item.info ? '2' : '0'

    return (
        <section className='project'>
            <button onClick={goBack} type="button" className="project__return">← Назад</button>
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
                    images.slice(slice_point, images.length).map((image) =>
                        <img className='project__image' alt={item.name} src={image} />
                    )
                }
            </div>
        </section>
    )
}
export default Project;

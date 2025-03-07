import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import PopUpQuiz from '../PopUpQuiz/PopUpQuiz'
import './Project.css';
import { Com } from '../../Utils/PortfolioCards'
import video from '../../video/JetKids.mp4'
import Exhibition from "../Exhibition/Exhibition";

function Project() {
    const navigate = useNavigate();
    let slice_point = 2

    const goBack = () => {
        navigate(-1);
    };

    const { projectId } = useParams();
    const item = Com.find(item => item.id === projectId);
    var images = item.images
    var texts = item.info

    const bodyElement = document.querySelector('body');
    const [isPopUpQuiz, setIsPopUpQuiz] = useState(false);


    function handleopUpQuizOpens() {
        setIsPopUpQuiz(true)
        bodyElement.style.overflow = 'hidden';
    }

    function closePopUp() {
        setIsPopUpQuiz(false)
        bodyElement.style.overflow = 'auto';
    }


    const [isWidth, setisWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function () {
        setisWidth(window.innerWidth);
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    if (item.info) {
        if (isWidth > 900) {
            slice_point = 2
        }
        else {
            slice_point = 1
        }
    } else {
        slice_point = 1
    }

    return (
        <section className='project'>
            <button onClick={goBack} type="button" className="project__return">← Назад</button>
            <div className='project__cover'>
                <img className='project__cover-img' alt={item.name} src={item.images[0]} />
                <p className='project__cover-text project__cover-type'>{item.type}</p>
                <p className='project__cover-text project__cover-name'>{item.name}</p>
                {item.square && <p className='project__cover-text project__cover-square'>Общая площадь помещения {item.square} кв.м</p>}
            </div>
            {item.id !== '32' && (
                <>
                    {item.info && (
                        <div className='project__info'>
                            {isWidth > 900 && (
                                <img className='project__info-img' alt={item.name} src={item.images[1]} />
                            )}
                            <div className='project__info-texts'>
                                {texts.map((text, index) => (
                                    <p key={index} className='project__info-text'>{text}</p>
                                ))}
                            </div>
                        </div>
                    )}
                    {item.id === '21' && (
                        <video controls muted className="project__video">
                            <source className="project__source" src={video} type="video/mp4" preload='auto' />
                            <p className="project__error">
                                Ваш браузер не поддерживает встроенные видео.
                            </p>
                        </video>
                    )}
                    <div className='project__images'>
                        {images.slice(slice_point).map((image, index) => (
                            <img key={index} className='project__image' alt={item.name} src={image} />
                        ))}
                    </div>
                </>
            )}
            {item.id === '32' && <Exhibition item={item} texts={texts}/>}
            <button onClick={handleopUpQuizOpens} className='project__button'>Оставить заявку на дизайн-проект</button>
            <PopUpQuiz isOpend={isPopUpQuiz} close={closePopUp} />
        </section>
    )
}
export default Project;
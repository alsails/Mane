import './Exhibition2.css'
import video1 from '../../video/city1.MP4'
import video3 from '../../video/city3.MP4'
import video2 from '../../video/city2.mp4'
import { useEffect, useMemo, useState } from "react";

function Exhibition2({ item, texts }) {
    const [isWidth, setIsWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setIsWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const titleParts = useMemo(() => {
        if (!item?.name) {
            return { first: '', rest: '' };
        }

        const [first, ...rest] = item.name.split(' ');
        return { first, rest: rest.join(' ') };
    }, [item?.name]);

    const images = item?.images || [];
    const promoImage = images[4];
    const galleryImages = promoImage === images[images.length - 1]
        ? images.slice(0, -1)
        : images.slice(1);

    const [
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
    ] = galleryImages;

    const infoTexts = texts || [];

    return (
        <section className="exhibition2">
            <div className="exhibition_info">
                <div className="exhibition_title">
                    <h2 className="exhibition_title-text">
                        <span>{titleParts.first}</span>{titleParts.rest ? ` ${titleParts.rest}` : ''}
                    </h2>
                </div>
                <div className="exhibition_promo">
                    <img className='exhibition_promo-img' alt={item?.name} src={promoImage} />
                </div>
                <div className="exhibition_text exhibition_third">
                    <p className='exhibition__info-text'><span>{infoTexts[0]}</span></p>
                </div>
                <div className="exhibition_img exhibition_forth">
                    <img className='exhibition-img' alt={item?.name} src={img7} />
                </div>
                <div className="exhibition_img exhibition_fifth">
                    <video controls muted className="idea__video idea__video_big">
                        <source className="idea__source" src={video1} type="video/mp4" preload='auto' />
                        <p className="idea__error">
                            Ваш браузер не поддерживает встроенные видео.
                        </p>
                    </video>
                </div>
                <div className="exhibition_text exhibition_sixth">
                    <p className='exhibition__info-text'>{infoTexts[1]}</p>
                    <p className='exhibition__info-text'>{infoTexts[8]}</p>
                </div>
                <div className="exhibition_img exhibition_seventh">
                    <img className='exhibition-img' alt={item?.name} src={images[1]} />
                </div>
                <div className="exhibition_img exhibition_eighth">
                    <video controls muted className="idea__video idea__video_big">
                        <source className="idea__source" src={video3} type="video/mp4" preload='auto' />
                        <p className="idea__error">
                            Ваш браузер не поддерживает встроенные видео.
                        </p>
                    </video>
                </div>
            </div>

            {isWidth > 820 && (
                <div className="idea_container">
                    <h2 className="idea_title-text"><span>Идея</span> экспозиции</h2>
                    <div className="idea_container_first">
                        <video controls muted className="idea__video">
                        <source className="idea__source" src={video2} type="video/mp4" preload='auto' />
                        <p className="idea__error">
                            Ваш браузер не поддерживает встроенные видео.
                        </p>
                    </video>
                        <div className="idea_container_first-text">
                            <p className='idea__info-text'>{infoTexts[2]}</p>
                        </div>
                        <img className='idea_container_first-img' alt={item?.name} src={img6} />
                    </div>

                    <img className='idea_container-img idea_container-img_big' alt={item?.name} src={img8} />

                    <div className="idea_container_second">
                        <img className='idea_container_second-img' alt={item?.name} src={img9} />
                        <img className='idea_container_second-img' alt={item?.name} src={img11} />
                        <div className="idea_container_first-text">
                            {infoTexts.slice(3, 7).map((text, index) => (
                                <p key={index} className='idea__info-text'><span>{text}</span></p>
                            ))}
                        </div>
                        <img className="idea_container_second-img" alt={item?.name} src={img10} />
                    </div>
                </div>
            )}

            {isWidth <= 820 && (
                <div className="idea_container">
                    <h2 className="idea_title-text"><span>Идея</span> экспозиции</h2>
                    <div className="idea_container_first">
                        <img className='idea_container_first-img' alt={item?.name} src={img5} />
                        <div className="idea_container_first-text">
                            <p className='idea__info-text'>{infoTexts[2]}</p>
                        </div>

                        <img className='idea_container-img' alt={item?.name} src={img7} />
                        <img className='idea_container_first-img' alt={item?.name} src={img6} />
                    </div>

                    <img className='idea_container-img idea_container-img_big' alt={item?.name} src={img8} />

                    <div className="idea_container_second">
                        <img className='idea_container_second-img' alt={item?.name} src={img9} />
                        <img className='idea_container_second-img' alt={item?.name} src={img11} />
                        <div className="idea_container_first-text">
                            {infoTexts.slice(3, 7).map((text, index) => (
                                <p key={index} className='idea__info-text'><span>{text}</span></p>
                            ))}
                        </div>
                        <img className="idea_container_second-img" alt={item?.name} src={img10} />
                    </div>
                </div>
            )}
        </section>
    )
}

export default Exhibition2;

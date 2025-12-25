import video2 from '../../video/Uralskoe_bali.mp4'
import './Exhibition.css'

import { useState } from "react";

function Exhibition({item, texts}) {
    const [isWidth, setisWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function () {
        setisWidth(window.innerWidth);
    });

    return (
        <section className="exhibition">
            <div class="exhibition_info">
                <div class="exhibition_title">
                    <h2 className="exhibition_title-text"><span>Ко</span>нцепция</h2>
                </div>
                <div class="exhibition_promo"><img className='exhibition_promo-img' alt={item.name} src={item.images[16]} /></div>
                <div class="exhibition_text exhibition_third">
                    <p className='exhibition__info-text'><span>{texts[4]}</span></p>
                </div>
                <div class="exhibition_img exhibition_forth"><img className='exhibition-img' alt={item.name} src={item.images[4]} /></div>
                <div class="exhibition_img exhibition_fifth"><img className='exhibition-img' alt={item.name} src={item.images[3]} /></div>
                <div class="exhibition_text exhibition_sixth">
                    <p className='exhibition__info-text'>{texts[2]}</p>
                    <p className='exhibition__info-text'>{texts[3]}</p>
                </div>
                <div class="exhibition_img exhibition_seventh"><img className='exhibition-img' alt={item.name} src={item.images[5]} /></div>
                <div class="exhibition_img exhibition_eighth"><img className='exhibition-img' alt={item.name} src={item.images[6]} /></div>
            </div>

            {isWidth > 820 && (
                <>
                    <div class="idea_container">
                        <h2 className="idea_title-text"><span>Идея</span> капсулы УРАЛЬСКОЕ БАЛИ</h2>
                        <div class="idea_container_first">
                            <img className='idea_container_first-img' alt={item.name} src={item.images[14]} />
                            <div className="idea_container_first-text">
                                {texts.slice(6, 8).map((text, index) => (
                                    <p key={index} className='idea__info-text'>{text}</p>
                                ))}
                            </div>
                            <img className='idea_container_first-img' alt={item.name} src={item.images[12]} />
                        </div>

                        <img className='idea_container-img' alt={item.name} src={item.images[11]} />

                        <div className="idea_container_second">

                            <img className='idea_container_second-img' alt={item.name} src={item.images[13]} />
                            <img className='idea_container_second-img' alt={item.name} src={item.images[15]} />
                            <div className="idea_container_first-text">
                                <p className='idea__info-text'><span>{texts[8]}</span></p>
                                <p className='idea__info-text'><span>{texts[9]}</span></p>
                            </div>

                            <video controls muted className="idea__video">
                                <source className="idea__source" src={video2} type="video/mp4" preload='auto' />
                                <p className="idea__error">
                                    Ваш браузер не поддерживает встроенные видео.
                                </p>
                            </video>
                        </div>
                    </div>
                </>
            )}

            {isWidth <= 820 && (
                <>
                    <div class="idea_container">
                        <h2 className="idea_title-text"><span>Идея</span> капсулы УРАЛЬСКОЕ БАЛИ</h2>
                        <div class="idea_container_first">
                            <img className='idea_container_first-img' alt={item.name} src={item.images[14]} />
                            <div className="idea_container_first-text">
                                {texts.slice(6, 8).map((text, index) => (
                                    <p key={index} className='idea__info-text'>{text}</p>
                                ))}
                            </div>

                            <img className='idea_container-img' alt={item.name} src={item.images[11]} />
                            <img className='idea_container_first-img' alt={item.name} src={item.images[12]} />
                        </div>

                        

                        <div className="idea_container_second">

                            <img className='idea_container_second-img' alt={item.name} src={item.images[13]} />
                            <img className='idea_container_second-img' alt={item.name} src={item.images[15]} />
                            <div className="idea_container_first-text">
                                <p className='idea__info-text'><span>{texts[8]}</span></p>
                                <p className='idea__info-text'><span>{texts[9]}</span></p>
                            </div>

                            <video controls muted className="idea__video">
                                <source className="idea__source" src={video2} type="video/mp4" preload='auto' />
                                <p className="idea__error">
                                    Ваш браузер не поддерживает встроенные видео.
                                </p>
                            </video>
                        </div>
                    </div>
                </>
            )}
        </section>
    )
}

export default Exhibition;

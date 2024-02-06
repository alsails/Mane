import './Video.css';
import video from '../../video/aboutUs.mp4'

function Video() {
    return (
        <section className="video__section">
            <div className="video__container">
                <video controls muted className="video">
                    <source className="video__source" src={video} type="video/mp4" preload='auto' />
                    <p className="video__error">
                        Ваш браузер не поддерживает встроенные видео.
                    </p>
                </video>
            </div>
        </section>
    )
}
export default Video;

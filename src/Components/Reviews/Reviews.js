import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Title from '../Title/Title';
import './Reviews.css';

import { Rev } from '../../Utils/ReviewsText'

function Reviews() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className='reviews__section' id='reviews'>
            <div className='reviews'>
                <Title start='От' end='зывы' />
                <Slider {...settings}>
                    {
                        Rev.map((review) => (
                            <div className="review__container" key={review.id}>
                                <div className="review">
                                    <h3 className="review__title">{review.title}</h3>
                                    {review.text.map((text, index) =>
                                        <p className="review__text" key={`${review.id}-${index}`}>{text}</p>
                                    )}
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}
export default Reviews;

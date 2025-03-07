import Promo from '../Promo/Promo';
import AboutUs from '../AboutUs/AboutUs';
import Portfolio from '../Portfolio/Portfolio';
import Contacts from '../Contacts/Contacts';
import PromoQuiz from '../PromoQuiz/PromoQuiz'
import Video from '../Video/Video';
import Price from '../Price/Price';
import AboutPrice from '../AboutPrice/AboutPrice';
import Reviews from '../Reviews/Reviews';
import ExhibitionPromo from '../ExhibitionPromo/ExhibitionPromo';

function Main() {
    return (
        <>
            <Promo />
            <AboutUs />
            <ExhibitionPromo />
            <PromoQuiz />
            <Portfolio />
            <Price />
            <AboutPrice />
            <Reviews />
            <Contacts />
            <Video />
        </>
    )
}
export default Main;
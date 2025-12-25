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
import Img1 from '../../images/portfolio/Exhibition/11.jpg'
import Img2 from '../../images/portfolio/Exhibition2/1.JPG'

function Main() {
    return (
        <>
            <Promo />
            <AboutUs />
            <ExhibitionPromo id = '32' title = 'Русский дом' subtitle = 'Уральское Бали' type = 'Выставка' img={Img1}/>
            <PromoQuiz />
            <ExhibitionPromo id = '34' title = 'Русский дом' subtitle = 'Каменный город. Край без окраин' type = 'Выставка' img={Img2}/>
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
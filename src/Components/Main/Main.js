import Promo from '../Promo/Promo';
import AboutUs from '../AboutUs/AboutUs';
import Portfolio from '../Portfolio/Portfolio';
import Contacts from '../Contacts/Contacts';
import PromoQuiz from '../PromoQuiz/PromoQuiz'

function Main({handleopUpQuizOpen}) {
    return (
        <>
            <Promo />
            <AboutUs />
            <Portfolio />
            {/* <Contacts /> */}
            <PromoQuiz handleopUpQuizOpen={handleopUpQuizOpen}/>
        </>
    )
}
export default Main;

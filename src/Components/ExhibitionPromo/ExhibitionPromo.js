import './ExhibitionPromo.css';
import Img1 from '../../images/portfolio/Exhibition/11.jpg'
import { Link } from "react-router-dom";

function ExhibitionPromo() {
    return (
        <Link to='/project/32'>
            <section className="exhibitionPromo">
                <img className="exhibitionPromo_img" src={Img1} alt='Промо изображение' />
                <h2 className='exhibitionPromo_content-titlte'>Русский дом</h2>
                <p className='exhibitionPromo_content-subtitle'>Уральское бали</p>
                <p className='exhibitionPromo_content-type'>Выставка</p>
            </section>
        </Link>
    )
}

export default ExhibitionPromo;
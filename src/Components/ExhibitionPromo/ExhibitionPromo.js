import './ExhibitionPromo.css';
import { Link } from "react-router-dom";

function ExhibitionPromo({ id, title, subtitle, type, img }) {
    return (
        <Link to={`/project/${id}`}>
            <section className="exhibitionPromo">
                <img className="exhibitionPromo_img" src={img} alt='Промо изображение' />
                <h2 className='exhibitionPromo_content-titlte'>{title}</h2>
                <p className='exhibitionPromo_content-subtitle'>{subtitle}</p>
                <p className='exhibitionPromo_content-type'>{type}</p>
            </section>
        </Link>
    )
}

export default ExhibitionPromo;
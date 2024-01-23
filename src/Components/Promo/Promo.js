import { Link } from "react-router-dom";
import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__post'>
        <Link  to='/project/24'>
          <p className='promo__more'>Подробнее</p>
        </Link>
      </div>
      <div className='promo__post'>
        <Link  to='/project/15'>
          <p className='promo__more'>Подробнее</p>
        </Link>
      </div>
      <div className='promo__post'>
        <Link  to='/project/23'>
          <p className='promo__more'>Подробнее</p>
        </Link>
      </div>
    </section>
  )
}
export default Promo;

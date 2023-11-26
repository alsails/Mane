import { Link } from "react-router-dom";
import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__post'>
        <Link  to='/project/15'>
          <p className='promo__more'>Подробнее</p>
        </Link>
      </div>
      <div className='promo__post'>
        <Link  to='/project/10'>
          <p className='promo__more'>Подробнее</p>
        </Link>
      </div>
      <div className='promo__post'>
        <Link  to='/project/16'>
          <p className='promo__more'>Подробнее</p>
        </Link>
      </div>
    </section>
  )
}
export default Promo;

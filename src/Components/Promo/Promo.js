import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__post'>
        <a  href='/project/15'>
          <p className='promo__more'>Подробнее</p>
        </a>
      </div>
      <div className='promo__post'>
        <a  href='/project/10'>
          <p className='promo__more'>Подробнее</p>
        </a>
      </div>
      <div className='promo__post'>
        <a  href='/project/16'>
          <p className='promo__more'>Подробнее</p>
        </a>
      </div>
    </section>
  )
}
export default Promo;

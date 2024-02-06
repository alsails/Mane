import { Link } from "react-router-dom";
import './Promo.css';

import { Com } from '../../Utils/PortfolioCards'

import Img1 from '../../images/promo/type1.jpg'
import Img2 from '../../images/promo/type2.jpg'
import Img3 from '../../images/promo/type3.jpg'

function Promo() {
  const item1 = Com.find(item => item.id === '24')
  const item2 = Com.find(item => item.id === '15')
  const item3 = Com.find(item => item.id === '23')

  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__post'>
          <Link to='/project/24'>
            <img className="promo__post-img" src={Img1} alt='Промо изображение'/>
            {
              <div className='promo__info'>
                {item1.type && <p className='promo__type'>{item1.type}</p>}
                <p className='promo__name'>{item1.name}</p>
              </div>
            }
          </Link>
        </div>
        <div className='promo__post'>
          <Link to='/project/15'>
          <img className="promo__post-img" src={Img2} alt='Промо изображение'/>
            {
              <div className='promo__info'>
                {item2.type && <p className='promo__type promo__type-small'>{item2.type}</p>}
                <p className='promo__name promo__name-small'>{item2.name}</p>
              </div>
            }
          </Link>
        </div>
        <div className='promo__post'>
          <Link to='/project/23'>
          <img className="promo__post-img" src={Img3} alt='Промо изображение'/>
            {
              <div className='promo__info'>
                {item3.type && <p className='promo__type promo__type-small'>{item3.type}</p>}
                <p className='promo__name promo__name-small'>{item3.name}</p>
              </div>
            }
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Promo;

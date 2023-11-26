import { Link } from "react-router-dom";

import PortfolioPreview from '../PortfolioPreview/PortfolioPreview';
import Title from '../Title/Title';
import './Portfolio.css';
import {Com} from '../../Utils/PortfolioCards'

function Portfolio() {
  const filteredCom = Com.filter(item => item.t.toLowerCase().includes('com'));
  const filteredHom = Com.filter(item => item.t.toLowerCase().includes('hom'));

  return (
    <section className='portfolio' id='portfolio'>
      <Title start="По" end="ртфолио" />
      <div className='portfolio__com'>
        <div className='portfolio__type'>
          <p className='portfolio__type_name'>Коммерческие помещения</p>
          <Link className='portfolio__type_more' to='/portfolio'>Показать ещё</Link>
        </div>
        <PortfolioPreview items={filteredCom} />
      </div>
      <div className='portfolio__home'>
        <div className='portfolio__type'>
          <p className='portfolio__type_name'>Жилые помещения</p>
          <Link className='portfolio__type_more' to='/portfolio'>Показать ещё</Link>
        </div>
        <PortfolioPreview items={filteredHom} />
      </div>
    </section>
  )
}
export default Portfolio;

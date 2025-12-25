import { useEffect, useState } from "react";

import PortfolioCard from '../PortfolioCard/PortfolioCard';
import './PortfolioPreview.css';

function PortfolioPreview({ items, type }) {
  const [isWidth, setisWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setisWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='portfolioPreview'>
      {type !== 'portfolio' && ((isWidth > 751) || (isWidth < 551)) && (
        items.slice(0, 3).map((item) =>
          <PortfolioCard key={item.id} item={item} />
        )
      )}
      {type !== 'portfolio' && ((isWidth < 751) && (isWidth > 551)) && (
        items.slice(0, 2).map((item) =>
          <PortfolioCard key={item.id} item={item} />
        )
      )}
      {type === 'portfolio' && (
        items.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))
      )}

    </section>
  )
}
export default PortfolioPreview;

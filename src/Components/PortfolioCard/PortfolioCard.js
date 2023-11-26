import './PortfolioCard.css';

function PortfolioCard({ item }) {
  return (
    <a className='portfolioCard' href={`/project/${item.id}`}>
      <div className='portfolioCard'>
        <img className='portfolioCard__img' src={item.img} alt={item.name} />
        <div className='portfolioCard__info'>
          <p className='portfolioCard__type'>{item.type}</p>
          <p className='portfolioCard__name'>{item.name}</p>
          {item.address && (
            <>
              <p className='portfolioPreview__address portfolioPreview__address_city'>{item.address.city}</p>
              <p className='portfolioPreview__address portfolioPreview__address_tc'>{item.address.tc}</p>
            </>
          )}
        </div>
      </div>
    </a>
  )
}
export default PortfolioCard;

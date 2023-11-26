import React, { useState } from 'react';

import Title from '../Title/Title';
import PortfolioPreview from '../PortfolioPreview/PortfolioPreview';

import './AllPortfolio.css';
import { Com } from '../../Utils/PortfolioCards'

function AllPortfolio() {
    const [activeCategory, setActiveCategory] = useState('Все');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const filteredItems = activeCategory === 'Все'
        ? Com
        : Com.filter(item => item.category === activeCategory);

    return (
        <section className='allPortfolio'>
            <Title start="По" end="ртфолио" />
            <nav className='allPortfolio__categories'>
                {['Все', 'Офисы', 'Отели и рестораны', 'Магазины и бутики', 'Квартиры', 'Загородные клубы и дома'].map(category => (
                    <li
                        key={category}
                        className={`allPortfolio__category ${activeCategory === category ? 'allPortfolio__category_active' : ''}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </li>
                ))}
            </nav>
            <div className='allPortfolio__cards'>
                <PortfolioPreview items={filteredItems} type='portfolio'/>
            </div>
        </section>
    )
}
export default AllPortfolio;
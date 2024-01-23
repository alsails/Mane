import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {NavLink} from "react-router-dom";

import Title from '../Title/Title';
import PortfolioPreview from '../PortfolioPreview/PortfolioPreview';

import './AllPortfolio.css';
import { Com, Categories } from '../../Utils/PortfolioCards'

function AllPortfolio() {
    const { categoryId } = useParams();
    const [activeCategory, setActiveCategory] = useState('Все');

    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        if (categoryId) {
          const category = Categories.find(cat => cat.id === categoryId);
          setActiveCategory(category ? category.name : 'Все');
        } else {
          setActiveCategory('Все');
        }
      }, [categoryId]);

    useEffect(() => {
        const updatedFilteredItems = activeCategory === 'Все'
            ? Com
            : Com.filter(item => item.category === activeCategory);

        setFilteredItems(updatedFilteredItems);
    }, [activeCategory, Com]);

    return (
        <section className='allPortfolio'>
            <Title start="По" end="ртфолио" />
            <nav className='allPortfolio__categories'>
                {Categories.map(category => (
                    <NavLink 
                        key={category}
                        to={`/portfolio/${category.id}`}
                        className={`allPortfolio__category ${activeCategory === category.name ? 'allPortfolio__category_active' : ''}`}
                    >
                        {category.name}
                    </NavLink >
                ))}
            </nav>
            <div className='allPortfolio__cards'>
                <PortfolioPreview items={filteredItems} type='portfolio' />
            </div>
        </section>
    )
}
export default AllPortfolio;
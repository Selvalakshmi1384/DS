import React from 'react';
import PortfolioItem from './PortfolioItem';
import './Portfolio.css';
const portfolioItems = [
  {
    title: 'To-Do List',
    description: 'The main purpose of a Todo List is to help users stay organized and keep track of their tasks and deadlines.',
    image: 'todo.png'
  },
  {
    title: 'E-Commerce Website',
    description: 'An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet.',
    image: 'ecom.png'
  },
  
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>PORTFOLIO</h2>
      <div className="portfolio-items">
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;


import React from 'react';

function PortfolioItem({ title, description, image }) {
  return (
    <div className="portfolio-item">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
    </div>
  );
}

export default PortfolioItem;

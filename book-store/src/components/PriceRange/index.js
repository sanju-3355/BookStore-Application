import React from "react";
import './index.css'

const PriceRange = ({ priceRange, setPriceRange }) => {
  return (
    <div className="price-filter">
      <label>Price Range:<br/>        ${priceRange[0]} - ${priceRange[1]}</label>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={priceRange[0]}
        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
      />
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
      />
    </div>
  );
};

export default PriceRange;

import React, { useState } from 'react';
import './index.css';
const FashionMegaMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      name: 'Men',
      subCategories: [
        { name: 'Casual Wear', items: ['T-Shirts', 'Jeans', 'Shoes'] },
        { name: 'Formal Wear', items: ['Suits', 'Ties', 'Shirts'] },
        { name: 'Accessories', items: ['Watches', 'Wallets', 'Bags'] },
      ],
    },
    {
      name: 'Women',
      subCategories: [
        { name: 'Casual Wear', items: ['Dresses', 'Tops', 'Skirts'] },
        {
          name: 'Formal Wear',
          items: ['Evening Gowns', 'Blazers', 'Pantsuits'],
        },
        { name: 'Accessories', items: ['Jewelry', 'Handbags', 'Scarves'] },
      ],
    },
  ];

  const handleMouseEnter = (name) => {
    setActiveCategory(name);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <>
      <div class="navbar">
        <div class="dropdown">
          <button class="dropbtn">
            Dropdown
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <div class="column">
              <h3>Category 1</h3>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
            <div class="column">
              <h3>Category 2</h3>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
            <div class="column">
              <h3>Category 3</h3>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FashionMegaMenu;

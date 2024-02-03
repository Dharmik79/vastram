import React, { useState } from 'react';
import './index.css';
import Logo from '../../assets/images/logos.svg';
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
        <a href="#home" class="mx-7 navbar-logo">
          <img src={Logo} alt="Logo" className="h-24" />
        </a>
        <div class="dropdown">
          <button class="dropbtn">
            Categories
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <div class="column">
              <h3>Mens</h3>
              <a href="#">Suits</a>
              <a href="#">Shirts</a>
              <a href="#">Formal Trousers</a>
              <a href="#">Tuxedos</a>
            </div>
            <div class="column">
              <h3>Womens</h3>
              <a href="#">Dresses</a>
              <a href="#">Blouses</a>
              <a href="#">Skirts</a>
              <a href="#">Leggings</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FashionMegaMenu;

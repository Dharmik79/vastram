import React, { useState } from 'react';
import './index.css';
import Logo from '../../assets/images/logos.svg';
import Avatar from '../../assets/images/avatar.png';
import Cart from '../../icons/availableIcon';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/States/GlobalState';
const FashionMegaMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const { Global } = React.useContext(GlobalContext);
  console.log(Global?.cart);
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
      <div class="navbar flex justify-between items-center bg-grey-500">
        <a href="/" class="mx-7 navbar-logo">
          <img src={Logo} alt="Logo" className="h-24" />
        </a>
        <div class="dropdown">
          <button class="flex items-left font-bold text-xl">
            Categories
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content overlapClass ml-15">
            <div class="column ml-10 mb-10">
              <h3 className="dropTitle">Mens</h3>
              <a href="#">Suits</a>
              <a href="#">Shirts</a>
              <a href="#">Formal Trousers</a>
              <a href="#">Tuxedos</a>
            </div>
            <div class="column mb-10">
              <h3 className="dropTitle">Womens</h3>
              <a href="#">Dresses</a>
              <a href="#">Blouses</a>
              <a href="#">Skirts</a>
              <a href="#">Leggings</a>
            </div>
          </div>
        </div>
        <div className="mr-5">
          <div className="flex items-center gap-3">
            {Global?.cart?.length > 0 ? (
              <div
                className={`relative min-w-[48px] border-2 border-black  header__link_cart`}
              >
                <Link to="/cart">
                  <Cart />
                </Link>
              </div>
            ) : (
              <div
                className={`relative min-w-[48px] border-2 border-black header__link `}
              >
                <Link to="/cart">
                  <Cart />
                </Link>
              </div>
            )}

            <div className="relative min-w-[48px] border-2 border-black">
              <img
                src={Avatar}
                className="object-cover w-16 h-16 border-2 border-white rounded-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FashionMegaMenu;

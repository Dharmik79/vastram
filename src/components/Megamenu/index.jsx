import React from 'react';
import './index.css'; // Assuming you have an external CSS file

const FashionMegaMenu = () => {
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
        { name: 'Formal Wear', items: ['Evening Gowns', 'Blazers', 'Pantsuits'] },
        { name: 'Accessories', items: ['Jewelry', 'Handbags', 'Scarves'] },
      ],
    },
  ];

  return (
    <div className="fashion-mega-menu">
      {categories.map((category) => (
        <div key={category.name} className="menu-item">
          <h3>{category.name}</h3>
          <div className="sub-categories">
            {category.subCategories.map((sub) => (
              <div key={sub.name}>
                <h4>{sub.name}</h4>
                <ul>
                  {sub.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FashionMegaMenu;

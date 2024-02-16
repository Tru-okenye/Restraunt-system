import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './index.css';
import Menu from './Menu';
import Category from './Category';

const categoryImages = {
  Appetizers: 'https://mediacity.co.in/delici/static/media/menus-1.fc6aebbd728d9b9c6cb6.jpg',
  MainDishes: 'https://mediacity.co.in/delici/static/media/menu-image-13.def913c8d8e23413a075.jpg',
  Desserts: 'https://mediacity.co.in/delici/static/media/menus-desert.de9d53cefb20dff98b36.jpg',
  Drinks: 'https://mediacity.co.in/delici/static/media/menus-drinks.42849c5837982ecc2735.jpg',
  // Add more categories and image URLs as needed
};

const categoryHeadings = {
  Appetizers: 'Our Menu 1',
  MainDishes: 'Our Menu 2',
  Desserts: 'Our Menu 3',
  Drinks: 'Our Menu 4',
  // Add more headings as needed
};



const Mainmenu = () => {
  const uniqueCategories = [...new Set(Menu.map((item) => item.category))];
  const [menuItems, setMenuItems] = useState(Menu);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { category } = useParams();
  const navigate = useNavigate();

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(Menu);
      setSelectedCategory('All');
    } else {
      const filteredItems = Menu.filter((item) => item.category === category);
      setMenuItems(filteredItems);
      setSelectedCategory(category);
    }
  };

  useEffect(() => {
    if (category && uniqueCategories.includes(category)) {
      setSelectedCategory(category);
      filterItems(category);
    } else {
      setSelectedCategory('All');
      filterItems('All');
      navigate('/menu');
    }
  }, [category, uniqueCategories, filterItems, navigate]);

  const groupedMenu = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});



  
  return (
    
    <div>
      
      {/* <Category filterItems={filterItems} categories={['All', ...uniqueCategories]} /> */}
      {selectedCategory === 'All' ? (
        <>
     
          <div className="">
            {categoryHeadings[selectedCategory]}
          </div>
          {Object.keys(groupedMenu).map((category, index) => (
            <div key={category} className={index % 2 === 0 ? "even-categorys" : "odd-categorys"}>
                <div className="menu-headings">

                <h2>{category}</h2>
                </div>
                
              <div className="category-details">
                <img src={categoryImages[category]} alt={category} />
               
              </div>
              <div className="food-items">
                {groupedMenu[category].map((menuItem) => (
                  <div key={menuItem.id} className="menu-item">
                    <div className="menu-item-details">
                      <h3>{menuItem.title} - ${menuItem.price.toFixed(2)}</h3>
                      <p>{menuItem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="headings">
          {categoryHeadings[category]}
          </div>
        <div className="all">
          {menuItems.map((menuItem, index) => (
            <div key={menuItem.id} className="food-item">
              <img src={menuItem.image} alt={menuItem.title} />
              <h3>{menuItem.title}</h3>
              <p>${menuItem.price.toFixed(2)}</p>
              <p>{menuItem.desc}</p>
            </div>
          ))}
        </div>
        </>
      )}
    </div>
  );
};

export default Mainmenu;
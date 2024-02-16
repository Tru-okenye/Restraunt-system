import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
const Category = ({ categories }) => {
  return (
    <div className="categorylinks">
      {categories.map((category, index) => (
        <li key={index} >
          <Link to={`/menu/${category}`} className="dropdown-item">
            {category}
          </Link>
        </li>
      ))}
    </div>
  );
}

export default Category;

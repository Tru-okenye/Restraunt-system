import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';
import { FaBars, FaTimes, FaCaretUp, FaCaretDown } from 'react-icons/fa'; 
import Category from './Category';

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);

  const toggleCategoriesDropdown = () => {
    setShowCategoriesDropdown(!showCategoriesDropdown);
  };

  const closeCategoriesDropdown = () => {
    setShowCategoriesDropdown(false);
     setShowSidebar(false);
  };

  return (
    <>
      <nav className="nav">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {showSidebar ? <FaTimes /> : <FaBars />}
        </button>

        <div className="navbar">
          <Link to="/" className="links" onClick={closeSidebar}>
            Home
          </Link>
          <div className="menu-link-container">
            <Link to="#" className="links" onClick={toggleCategoriesDropdown}>
              Menu {showCategoriesDropdown ? <FaCaretUp /> : <FaCaretDown />}
            </Link>
            {showCategoriesDropdown && (
              <div className="dropdown-content" onClick={closeCategoriesDropdown}>
                <Category categories={['All', 'Appetizers', 'MainDishes', 'Desserts', 'Drinks']} />

              </div>
            )}
          </div>
          <Link to="About" className="links" onClick={closeSidebar}>
            About
          </Link>
          <Link to="contact" className="links" onClick={closeSidebar}>
            Contact
          </Link>
          <Link to="chefs" className="links" onClick={closeSidebar}>
            Chefs
          </Link>
          <Link to="#" className="links" onClick={closeSidebar}>
            BOOK A TABLE
          </Link>
        </div>
        <hr></hr>

        {showSidebar && (
          <div className="sidebar-links">
            <Link to="/" className="links" onClick={closeSidebar}>
              Home
            </Link>
            <div className="menu-link-container">
              <Link to="#" className="links" onClick={toggleCategoriesDropdown}>
                Menu {showCategoriesDropdown ? <FaCaretUp /> : <FaCaretDown />}
              </Link>
              {showCategoriesDropdown && (
                <div className="dropdown-content links" onClick={closeCategoriesDropdown}>
                  <Category categories={['All' ,'Appetizers', 'MainDishes', 'Desserts', 'Drinks']} />
                </div>
              )}
            </div>
            <Link to="About" className="links" onClick={closeSidebar}>
              About
            </Link>
            <Link to="contact" className="links" onClick={closeSidebar}>
              Contact
            </Link>
            <Link to="chefs" className="links" onClick={closeSidebar}>
              Chefs
            </Link>
            <Link to="#" className="links" onClick={closeSidebar}>
              BOOK A TABLE
            </Link>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Home;

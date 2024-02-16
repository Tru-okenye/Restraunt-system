import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {useGlobalContext} from './Context';
const Sidebar = () => {
  const { showSidebar, closeSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar ${showSidebar ? 'show-sidebar' : ''}`}>
      <div className="ptn">
        <h1>Sidebar</h1>
        <button onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
    
    </aside>
  );
};

export default Sidebar;

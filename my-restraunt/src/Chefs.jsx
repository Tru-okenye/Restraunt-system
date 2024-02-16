import React, { useState } from 'react';
import ChefData from './Chefdata';
import './index.css';
const Chefs = () => {
  const [data, setData] = useState(ChefData);

  return (
    <>
      <h1>Chefs</h1>
      <div className="chef-container">
        <div className="firstchef">

        <div className="chef-column">
          <img src={data[0].image} alt={data[0].name} />
          </div>
          <div className="chef-details">
          <h2>{data[0].name}</h2>
          <p>{data[0].desc}</p>
        </div>
        </div>
        
        <div className="chef-row">
          {data.slice(1).map((chef) => (
            <div key={chef.id} className="chef-item">
              <img src={chef.image} alt={chef.name} />
              <h2>{chef.name}</h2>
              <p>{chef.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chefs;

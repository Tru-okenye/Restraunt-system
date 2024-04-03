import React, { useEffect } from 'react';
import './App.css';

const Restraunt = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        scroller.classList.add("animated"); // Add a class to trigger animation
        const scrollerInner = scroller.querySelector('.inner-scroller');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });

        // Reset animation by removing and re-adding the 'animated' class
        scroller.classList.remove("animated");
        setTimeout(() => {
          scroller.classList.add("animated");
        }, 10); // Adding a small delay to ensure proper reset
      });
    }
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <>
    
      <div className="scroller">
        <div className="inner-scroller">
        
          <h1>Welcome</h1>
          <h1>to</h1>
          <h1>our</h1>
          <h1>restraunt!</h1>
          <h1>Your</h1>
          <h1>choice</h1>
          <h1>is</h1>
          <h1>our</h1>
          <h1>priority</h1>
          {/* <h1>Food10</h1> */}
        </div>  
      </div>

      <div className="Homepage">
        <div className="overlay-text">
          <h1>welcome to my restaurant</h1>
          {/* <button>VIEW MENU</button> */}
        </div>
      </div>
    </>
  );
}

export default Restraunt;

import React from 'react'
import './scrollButton.css'
import {FaArrowUp} from 'react-icons/fa';
import { useState, useEffect } from 'react';

// a component that is used to insert a button for scrolling on to the 
// top of the page in case the page is below more than 100px
const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
	window.addEventListener('scroll', () => {
		if (window.scrollY > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	});
 }, []);

 const goTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

  return (
    <button className="scroll-button" style={{display: isVisible ? 'block':'none'}} onClick={goTop}>
        <FaArrowUp />
    </button>
  )
}

export default ScrollButton
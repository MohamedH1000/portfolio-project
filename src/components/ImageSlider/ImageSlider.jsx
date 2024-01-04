import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, autoPlayDelay = 10000  }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const autoPlay = () => {
    setInterval(() => {
      nextSlide();
    }, autoPlayDelay);
  };

  useEffect(() => {
    autoPlay();

    // Clear the interval when the component unmounts
    return () => clearInterval(autoPlay);
  }, [autoPlay]);

  return (
    <div className="image-slider-container">
      <button className="slider-button prev" onClick={prevSlide}>&#8249;</button>
      <img
        src={images[currentIndex]}
        alt={`slide ${currentIndex}`}
        className="slider-image"
        style={{height:'343px'}}
      />
      <button className="slider-button next" onClick={nextSlide}>&#8250;</button>
    </div>
  );
};

export default ImageSlider;
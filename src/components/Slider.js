import React, { useState } from 'react';
import './Slider.css'; 


const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

 

  return (
    <div className="slider-container">
      <div className="image-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.url} alt={`Slide ${index}`} />
            <div className="description">{slide.description}</div>
           
            <div className="button-container">
              <button onClick={prevSlide}>Call Back</button>
              <button onClick={nextSlide}>Add to list</button>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Slider;

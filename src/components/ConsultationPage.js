import React from 'react';
import Slider from 'react-slick';
import './ConsultationPage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ConsultationPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="consultation-container">
      <div className="clinic-image-container">
        <Slider {...settings}>
          <div>
            <img className="clinic-image" src="clinic-image1.jpg" alt="Clinic 1" />
          </div>
          <div>
            <img className="clinic-image" src="clinic-image2.jpg" alt="Clinic 2" />
          </div>
        </Slider>
        <div className="doctor-info">
          <img className="doctor-image" src="doctor-image.jpg" alt="Doctor" />
        </div>
      </div>
      <div className="side-section">
        <div className="fee-section">
          <p>Consultation fee:</p>
          <h2>Rs. 600</h2>
          <button className="book-slot-button">Book your slot</button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
import React from 'react';
import '../Styles/ServicesSectionOne.css';
import img19 from '../assets/img19.jpg';
import img20 from '../assets/img20.jpg';

const ServicesSectionOne = () => {
  return (
   <div className="container">
      <h1 className="title">Tailored Solutions for Every Need</h1>
      <div className="content">
        <div className="image-grid">
          <div className="small-image">
            <img
              src={img19}
              alt="Construction progress"
              className="image"
            />
          </div>
          <div className="large-image">
            <img
              src={img20}
              alt="Completed building"
              className="image"
            />
          </div>
        </div>
        <div className="text-section">
          <h2 className="subtitle">Comprehensive Expertise</h2>
          <p className="description">
            We offer a wide range of services designed to meet the unique challenges of
            our clients. From strategic planning to seamless execution, we ensure that
            every aspect of your project is handled with precision and care. Discover how
            we can help you achieve your goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSectionOne;
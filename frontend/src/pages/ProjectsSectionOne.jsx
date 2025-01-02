import React from 'react';
import '../Styles/ProjectSectionOne.css';
import img17 from '../assets/img17.jpg';
import img18 from '../assets/img18.jpg';

const ProjectsSectionOne = () => {
  return (
   <div className="container">
      <h1 className="title">Custom Strategies for Every Project's Success</h1>
      <div className="content">
        <div className="image-grid">
          <div className="small-image">
            <img
              src={img18}
              alt="Construction progress"
              className="image"
            />
          </div>
          <div className="large-image">
            <img
              src={img17}
              alt="Completed building"
              className="image"
            />
          </div>
        </div>
        <div className="text-section">
          <h2 className="subtitle">Broad-Spectrum Knowledge</h2>
          <p className="description">
          With services tailored to your specific challenges, we provide end-to-end
           solutions for every project. From strategy to execution, our commitment
            to detail ensures your goals are met with precision. Explore how we can 
            contribute to your success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSectionOne;
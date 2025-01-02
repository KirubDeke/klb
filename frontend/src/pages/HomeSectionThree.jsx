import React from 'react';
import '../Styles/HomeSectionThree.css';
import img2 from '../assets/img2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function HomeSectionThree(){
    return(
        <>
       <section className="statistics-section">
      <div className="image-container">
        <img src={img2} alt="Team working" className="team-image" />
        <div className="stats-container">
          <div className="stat-box gray">
            <h2>300+</h2>
            <p>Annual rents</p>
          </div>
          <div className="stat-box purple">
            <h2>50M</h2>
            <p>In assets</p>
          </div>
          <div className="stat-box blue">
            <h2>25+</h2>
            <p>Employees</p>
          </div>
        </div>
      </div>
      <div className="arrow-container">
        <FontAwesomeIcon icon={faChevronDown} className="arrow" />
      </div>
    </section>
        </>
    )

}export default HomeSectionThree;
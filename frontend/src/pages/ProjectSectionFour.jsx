import React from 'react';
import img7 from '../assets/img7.jpg'; 
import '../Styles/ProjectSectionFour.css'; 
import { Link } from 'react-router-dom'; 

function ProjectSectionFour() {
    return (
        <div className="ProjectSectioncontainer">
            <img src={img7} alt="Construction" className="background-image" />
            <div className="overlay">
                <h2 style={{fontSize:'32px'}}>Dedicated to Delivering Joy to Every Client.</h2>
                <p>Contact us today—we’re ready to assist you promptly.</p>
                <Link to='/contact' className="contact-button">Contact</Link>
            </div>
        </div>
    );
}

export default ProjectSectionFour;
import React from 'react';
import img4 from '../assets/img6.jpg'; 
import '../Styles/ServiceSectionFive.css'; 
import { Link } from 'react-router-dom';

function ServiceSectionFive() {
    return (
        <div className="ServiceSectioncontainer">
            <img src={img4} alt="Construction" className="background-image" />
            <div className="overlay">
                <h2 style={{fontSize:'32px'}}>We strive to make our clients happy</h2>
                <p>Give us a call and we’ll answer right away</p>
                <Link to='/contact' className="contact-button">Call Us</Link>
            </div>
        </div>
    );
}

export default ServiceSectionFive;
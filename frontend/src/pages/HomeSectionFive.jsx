import React from 'react';
import img16 from '../assets/img16.jpg'; 
import '../Styles/HomeSectionFive.css'; 
import { Link } from 'react-router-dom';

function HomeSectionFive() {
    return (
        <div className="HomeSectioncontainer">
            <img src={img16} alt="Construction" className="background-image" />
            <div className="overlay">
                <h2 style={{fontSize: '32px'}}>We strive to make our clients happy</h2>
                <p>Give us a call and we’ll answer right away</p>
                <Link to='/contact' className="contact-button">Contact</Link>
            </div>
        </div>
    );
}

export default HomeSectionFive;
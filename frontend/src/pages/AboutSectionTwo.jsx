import React from 'react';
import '../Styles/AboutSectionTwo.css';
import img1 from '../assets/img1.jpg';

const AboutSectionTwo = () => {
    return (
        <div className="core-principles">
            <h2 style={{fontSize:'20px'}}>Our Core Principles</h2>
            <h1 style={{fontSize:'32px', fontWeight:'400'}}>What We Value:</h1>
            <div className='box-wrap'>
                <div className='box-content'>
                    <h2>1</h2>
                    <h3>Integrity First</h3>
                    <p>We believe in honesty and transparency in every interaction. Trust is the foundation of our success, and we’re committed to upholding it at all times.</p>
                </div>
                <div className='box-image'>
                    <img src={img1} alt='building image' className='building-image'/>
                </div>
            </div>
            <div className='box-wrap'>
                <div className='box-content'>
                    <h2>2</h2>
                    <h3>Innovation Always</h3>
                    <p>By embracing creativity and forward-thinking, we continuously strive to improve and deliver cutting-edge solutions that inspire and transform.</p>
                </div>
                <div className='box-content'>
                    <h2>3</h2>
                    <h3>Excellence in Action</h3>
                    <p>Our focus on quality and precision ensures that every project meets the highest standards, creating lasting impact and value.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutSectionTwo;
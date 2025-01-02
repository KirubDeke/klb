import React from 'react';
import img1 from '../assets/img1.jpg';
import '../Styles/HomeStyle.css';
import { Link } from 'react-router-dom';


function Home(){
    return(
        <>
        <div className='HomeSection'>
            <div className='HomeContent'>
                <p className='headingOne'>Designed to Inspire, Built to Endure</p>  
                <p className='subHeading'>Elevating every detail to stand<br /> the test of time.</p>
                <Link to="/contact" className='btn'>Get in touch</Link>
                <p className='downwardArrow'>&darr;</p>
            </div>
            <div className='HomeImage'>
                <img src={img1} alt='image'/>
            </div>
        </div>
        
        </>
    )
}export default Home;
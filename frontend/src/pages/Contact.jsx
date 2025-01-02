import React from 'react';
import '../Styles/ContactStyle.css';
import img7 from '../assets/img7.jpg';
import Footer from './Footer';

function Contact() {
    return (
        <>
        <div className="contact-container">
            <div className='container-One'>
                <h1 className='contactUsHeadingOne'>Let's Build Something Remarkable Together.</h1>
                <p className='contactUsHeadingPara'>We're here to answer your questions, share insights, and help you take the next step. Feel free to reach out—we're always ready to connect.</p>

                <div className="contact-info">
                    <p className='contactUsHeadingPara'>Phone: +2519 3563 23156</p>
                    <p className='contactUsHeadingPara'>Email: info@kibenengineering.com</p>
                </div>

                <div className="visit-info">
                    <h2 className='contactUsHeadingTwo'>Visit us</h2>
                    <p className='contactUsHeadingPara'>Hawassa, Ethiopia</p>
                    <p className='contactUsHeadingPara'>Piyassa, Hawassa lake building, 5th floor</p>
                </div>

                <div className="socials">
                    <h2 className='contactUsHeadingTwo'>Contact us</h2>
                    <h2 className='contactUsHeadingTwo'>Follow our socials</h2>
                    <p className='contactUsHeadingPara'>LinkedIn</p>
                    <p className='contactUsHeadingPara'>Instagram</p>
                    <p className='contactUsHeadingPara'>X</p>
                </div>
            </div>
            <div className='container-Two'>
                <img src={img7} alt='Contact' />
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Contact;
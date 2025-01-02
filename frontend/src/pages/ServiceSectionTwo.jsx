import React, { useState } from 'react';
import '../Styles/ServiceSectionTwo.css';
import img2 from '../assets/img2.jpg'; 

const ServicesSectionTwo = ({
    questions = [
        { title: "Strategic Planning", answer: "Details about strategic planning." },
        { title: "Project Management", answer: "Details about project management." },
        { title: "Design and Development", answer: "Details about design and development." },
        { title: "Marketing and Branding", answer: "Details about marketing and branding." },
        { title: "Event Coordination", answer: "Details about event coordination." },
    ],
}) => {
    return (
        <section id="faq" className="faq-section">
            <div className="ServiceSectionTwocontent">
                <div className="accordion">
                    {questions.map((question, index) => (
                        <AccordionItem key={index} title={question.title} answer={question.answer} />
                    ))}
                </div>
                <div className="ServiceSectionTwoimage-container">
                    <img src={img2} alt="Description of the image" className="faq-image" />
                </div>
            </div>
        </section>
    );
};

const AccordionItem = ({ title, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <div className="accordion-trigger" onClick={toggleAccordion}>
                {title} <span className="arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && <div className="accordion-content">{answer}</div>}
        </div>
    );
};

export default ServicesSectionTwo;
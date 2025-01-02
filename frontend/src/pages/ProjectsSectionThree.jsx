// src/ProjectsSectionThree.js
import React, { useEffect, useRef, useState } from 'react';
import '../Styles/ProjectsSectionThree.css';
import img2 from '../assets/img2.jpg'; 
import img3 from '../assets/img3.jpg'; 
import img4 from '../assets/img4.jpg'; 

const ProjectsSectionThree = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stories = [
    {
      id: 1,
      title: "Coastal Retreat",
      description: "A serene resort designed to seamlessly integrate with its natural surroundings.",
      location: "Addis Abeba",
      image: img2,
    },
    {
      id: 2,
      title: "Skyline Tower",
      description: "A modern high-rise redefining urban living with sustainable architecture.",
      location: "Shashemene",
      image: img3,
    },
    {
      id: 3,
      title: "Nib Bank",
      description: "A modern high-rise redefining urban living with sustainable architecture.",
      location: "Hawassa",
      image: img4,
    },
  ];

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`success-stories ${isVisible ? 'fade-in' : ''}`} ref={sectionRef}>
      <h2>Some of our success stories</h2>
      <div className="Projectscards-container">
        {stories.map(story => (
          <div key={story.id} className="Projectscard">
            <img src={story.image} alt={story.title} />
            <div className="Projectscard-content">
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <p className="location" style={{ opacity: '100%', fontWeight: '400' }}>{story.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSectionThree;
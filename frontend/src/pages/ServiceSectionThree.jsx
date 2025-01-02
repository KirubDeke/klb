import React from 'react';
import 'swiper/swiper-bundle.css';
import '../Styles/ServiceSectionThree.css'; 

const ServiceSectionThree = () => {
    return (
        <div className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <div className="ServiceSectionContent">
            <div className="ServiceSectioItem">
              <h3>1</h3>
              <h4>Industry Expertise</h4>
              <p>Backed by years of experience, our team delivers unparalleled knowledge and precision in civil engineering and construction.</p>
            </div>
            <div className="ServiceSectioItem">
              <h3>2</h3>
              <h4>Innovative Solutions</h4>
              <p>We integrate modern technology and creative thinking to design sustainable and efficient solutions for every project.</p>
            </div>
            <div className="ServiceSectioItem">
              <h3>3</h3>
              <h4>Integrity</h4>
              <p>We uphold the highest standards of integrity in all our actions, ensuring transparency and accountability.</p>
            </div>
          </div>
        </div>
  );
};

export default ServiceSectionThree;
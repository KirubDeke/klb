import React from 'react';
import '../Styles/ServiceSectionFour.css';
import logo from '../assets/logo.png';

const ServiceSectionFour = () => {
  const companies = [
    { id: 1, logo: logo },
    { id: 2, logo: logo },
    { id: 3, logo: logo },
    { id: 4, logo: logo },
    { id: 5, logo: logo },
    { id: 6, logo: logo },
    { id: 7, logo: logo },
    { id: 8, logo: logo },
  ];

  return (
    <div className="companies-trust">
      <h2>Companies who trust us:</h2>
      <div className="logo-container">
        {companies.map(company => (
          <div key={company.id} className="logo-item">
            <img src={company.logo} alt={`Logo of company ${company.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSectionFour;
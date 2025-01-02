import React, { useState } from "react";
import emailjs from 'emailjs-com';
import '../Styles/Vacancy.css';
import img8 from '../assets/img8.jpg';
import Footer from './Footer';

function Vacancy() {
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    resume: null,
    preferredRole: '',
    coverLetter: '',
    message: '',
  });

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      resume: files ? files[0] : formData.resume,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
        from_name: formData.name,
        from_phone: formData.phone,
        from_email: formData.email,
        message: formData.message,
        role: selectedRole,
        preferredRole: formData.preferredRole,  
        coverLetter: formData.coverLetter,        
        resume: formData.resume ? formData.resume.name : 'Resume uploaded', 
    };

    console.log('Sending data:', dataToSend);

    emailjs.send('service_uwyct8s', 'template_v51vbyg', dataToSend, 'Y_eoAC5HB4q6HmQAk')
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Application submitted successfully!');
    }, (err) => {
        console.error('FAILED...', err);
        alert('Failed to send application. Please try again later.');
    });
};

  return (
    <>
      <div className="vacancy-wrapper">
        <div className="vacancy-content">
          <div className="vacancy-image">
            <img src={img8} alt="Architectural Model" />
          </div>
          <div className="vacancy-form-container">
            <div className="vacancy-header">
              <h1>Join Our Team</h1>
              <p style={{ fontWeight: '600', fontSize: '20px' }}>
                Be a part of a forward-thinking company where innovation and passion drive success.
              </p>
              <p style={{ borderBottom: '1px solid black' }}>
                At KLB Engineering, we're always on the lookout for talented individuals who share our vision for excellence and growth. Whether you're just starting your career or looking to take it to the next level, we offer a dynamic environment where your skills can thrive. Explore our current openings and discover how you can make an impact.
              </p>
            </div>
            <h2>What role do you work on?</h2>
            <div className="role-selection">
              {["Civil Engineer", "Project Manager", "Architect", "Administrative Assistant", "Construction Manager"].map(
                (role) => (
                  <button
                    key={role}
                    className={`role-button ${selectedRole === role ? "selected" : ""}`}
                    onClick={() => handleRoleSelection(role)}
                  >
                    {role}
                  </button>
                )
              )}
            </div>
            <p style={{ borderBottom: '1px solid black' }}></p>
            <form className="vacancy-form" onSubmit={handleSubmit}>
              <h2>Application Form:</h2>
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
              </label>
              <label>
                Phone Number:
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" required />
              </label>
              <label>
                Email Address:
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />
              </label>
              <label>
                Resume Upload:
                <input type="file" name="resume" onChange={handleChange} />
              </label>
              <label>
                Preferred Job Role:
                <select name="preferredRole" value={formData.preferredRole} onChange={handleChange}>
                  <option value="">Choose</option>
                  <option value="Intern">Intern</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                </select>
              </label>
              <label>
                Cover Letter (Optional):
                <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} placeholder="Write here..."></textarea>
              </label>
              <label>
                Message (Optional):
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..."></textarea>
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Vacancy;
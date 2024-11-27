import React from 'react';
import './Contact.css'; // Assuming you have a CSS file for styling

const Contact: React.FC = () => {
  return (
    <div>
      <div id='contact' className="contact-section">
        <div className="card location-card">
          <h3>Location</h3>
          <p>Karachi Gulshan e Hadeed PH2</p>
        </div>
        <div className="card contact-card">
          <h3>Contact</h3>
          <p>Email: subhankaladi@gmail.com</p>
          <p>Phone: 03293086256</p>
        </div>
        <div className="card social-media-card">
          <h3>Social Media</h3>
          <p>
            <a href="https://www.facebook.com/subhanallahkaladi" target="_blank" rel="noopener noreferrer">Facebook</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/subhan-kaladi-6242bb31b/" target="_blank" rel="noopener noreferrer">LinkedIN</a>
          </p>
          <p>
            <a href="https://www.instagram.com/subhan_kaladi/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Let's Connect!</h1>
      <div className="contact-content">
        <div className="contact-info">
          <p>I'm always excited to collaborate on new projects or discuss opportunities. Feel free to reach out through any of the following channels:</p>
          <div className="contact-links">
            <a className="contact-link" href="https://www.linkedin.com/in/steven-van-overmeiren/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} className="linkedin-icon" style={{ color: '#8C1D40' }} />
              <span>LinkedIn</span>
            </a>
            <a className="contact-link" href="mailto:svanovermeiren1@gmail.com">
              <svg className="contact-icon" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/>
              </svg>
              <span>svanovermeiren1@gmail.com</span>
            </a>
            <a className="contact-link" href="tel:+14808752783">
              <svg className="contact-icon" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.62 22 2 13.38 2 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>(480) 875-2783</span>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <p>Whether you have a question about my work or just want to say hello, I'd love to hear from you!</p>
        </div>
      </div>
    </div>
  );
}

export default Contact; 
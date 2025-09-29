import React from 'react';
import { FaHome } from 'react-icons/fa';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-page">
      <h1>My Resume</h1>
      <div className="resume-content">
        <div className="pdf-container">
          <div className="pdf-controls">
            <a 
              href="/resume.pdf" 
              download 
              className="download-button"
            >
              <svg 
                className="download-icon" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              <strong>Download Resume PDF</strong>
            </a>
            <a 
              href="/" 
              className="home-button"
            >
              <FaHome className="home-icon" size={16} />
              <strong>Back to Home</strong>
            </a>
          </div>
          <div className="pdf-viewer">
            <iframe
              src="/resume.pdf"
              title="Resume PDF"
              className="pdf-iframe"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume; 
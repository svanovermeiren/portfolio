import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import './Projects.css';

function DesignCompetition() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    imageSrc: '',
    imageAlt: ''
  });

  const openModal = (src, alt) => {
    setModalState({
      isOpen: true,
      imageSrc: src,
      imageAlt: alt
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      imageSrc: '',
      imageAlt: ''
    });
  };

  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <Link to="/projects" className="back-button">← Back to Projects</Link>
        <h1>Product Design Competition</h1>
        <p className="project-subtitle">National engineering design competition with innovative solution</p>
        
        <div className="project-image-gallery">
          <div className="gallery-image-container">
            <img 
              src="https://via.placeholder.com/300x200/007bff/ffffff?text=Design+Concept" 
              alt="Design Concept" 
              className="gallery-image"
              onClick={() => openModal("https://via.placeholder.com/800x600/007bff/ffffff?text=Design+Concept", "Design Concept")}
            />
          </div>
          <div className="gallery-image-container">
            <img 
              src="https://via.placeholder.com/300x200/28a745/ffffff?text=Prototype" 
              alt="Working Prototype" 
              className="gallery-image"
              onClick={() => openModal("https://via.placeholder.com/800x600/28a745/ffffff?text=Prototype", "Working Prototype")}
            />
          </div>
          <div className="gallery-image-container">
            <img 
              src="https://via.placeholder.com/300x200/dc3545/ffffff?text=Presentation" 
              alt="Competition Presentation" 
              className="gallery-image"
              onClick={() => openModal("https://via.placeholder.com/800x600/dc3545/ffffff?text=Presentation", "Competition Presentation")}
            />
          </div>
        </div>
      </div>

      <div className="project-detail-content">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            Led a team in a national engineering design competition, developing an innovative solution 
            to address real-world challenges. This project involved concept development, prototyping, 
            testing, and presentation to industry judges, demonstrating comprehensive engineering skills.
          </p>
        </div>

        <div className="project-details">
          <div className="side-by-side-container">
            <div className="detail-section process-section">
              <h3>Process</h3>
              <ul>
                <li>Led team of 4 engineers in concept development and project planning</li>
                <li>Designed and developed innovative solution to competition challenge</li>
                <li>Created functional prototype and conducted performance testing</li>
                <li>Prepared technical documentation and presentation materials</li>
                <li>Presented solution to panel of industry experts and judges</li>
              </ul>
            </div>

            <div className="detail-section tools-section">
              <h3>Tools/Technologies Used</h3>
              <ul>
                <li><strong>Team Size:</strong> 4 engineering students</li>
                <li><strong>Project Duration:</strong> 6 months from concept to final presentation</li>
                <li><strong>Prototype:</strong> Fully functional working model</li>
                <li><strong>Competition Level:</strong> National engineering design competition</li>
                <li><strong>Judging Criteria:</strong> Innovation, feasibility, and presentation quality</li>
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h3>Skills Demonstrated</h3>
            <div className="skills-grid">
              <span className="skill-tag">Project Management</span>
              <span className="skill-tag">Innovation</span>
              <span className="skill-tag">Team Leadership</span>
              <span className="skill-tag">Presentation</span>
              <span className="skill-tag">Prototyping</span>
              <span className="skill-tag">Technical Documentation</span>
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">Public Speaking</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Outcomes and Results</h3>
            <ul>
              <li>Successfully completed project within competition timeline</li>
              <li>Developed innovative solution that addressed competition requirements</li>
              <li>Created functional prototype demonstrating concept feasibility</li>
              <li>Delivered compelling presentation to industry judges</li>
              <li>Enhanced team collaboration and leadership skills</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Reflection</h3>
            <p>
              <strong>Challenge:</strong> Balancing innovation with technical feasibility<br/>
              <strong>Solution:</strong> Iterative design process with regular feasibility reviews<br/><br/>
              
              <strong>Challenge:</strong> Coordinating team efforts across multiple disciplines<br/>
              <strong>Solution:</strong> Clear project management structure and regular team meetings<br/><br/>
              
              <strong>Challenge:</strong> Meeting strict competition deadlines and requirements<br/>
              <strong>Solution:</strong> Detailed project planning and milestone tracking
            </p>
          </div>
        </div>
      </div>
      
      <ImageModal
        isOpen={modalState.isOpen}
        imageSrc={modalState.imageSrc}
        imageAlt={modalState.imageAlt}
        onClose={closeModal}
      />
    </div>
  );
}

export default DesignCompetition;

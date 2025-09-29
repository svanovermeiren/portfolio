import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import './Projects.css';

function AutomatedNFTHydroponicSystem() {
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
        <h1>Automated NFT Hydroponic System</h1>
        <p className="project-subtitle">Created a hydroponic system that actively adjusts nutrient level and pH</p>
        
        <div className="project-image-gallery">
          <div className="gallery-image-container">
            <img 
              src="https://via.placeholder.com/300x200/007bff/ffffff?text=Hydroponic+Design" 
              alt="Hydroponic System Design" 
              className="gallery-image"
              onClick={() => openModal("https://via.placeholder.com/800x600/007bff/ffffff?text=Hydroponic+Design", "Hydroponic System Design")}
            />
          </div>
          <div className="gallery-image-container">
            <img 
              src="https://via.placeholder.com/300x200/28a745/ffffff?text=Control+System" 
              alt="Automation Control System" 
              className="gallery-image"
              onClick={() => openModal("https://via.placeholder.com/800x600/28a745/ffffff?text=Control+System", "Automation Control System")}
            />
          </div>
          <div className="gallery-image-container">
            <img 
              src="https://via.placeholder.com/300x200/dc3545/ffffff?text=System+Assembly" 
              alt="Complete System Assembly" 
              className="gallery-image"
              onClick={() => openModal("https://via.placeholder.com/800x600/dc3545/ffffff?text=System+Assembly", "Complete System Assembly")}
            />
          </div>
        </div>
      </div>

      <div className="project-detail-content">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            Designed and built a complete automated NFT (Nutrient Film Technique) hydroponic system that actively 
            monitors and adjusts nutrient levels and pH. This project encompassed mechanical design, electronic 
            control systems, and software programming to create a fully automated growing system capable of 
            maintaining optimal growing conditions.
          </p>
        </div>

        <div className="project-details">
          <div className="side-by-side-container">
            <div className="detail-section process-section">
              <h3>Process</h3>
              <ul>
                <li>Designed NFT channel system and nutrient delivery mechanisms</li>
                <li>Developed automated control system for pH and nutrient monitoring</li>
                <li>Programmed sensor integration and automated adjustment algorithms</li>
                <li>Integrated water circulation and filtration systems</li>
                <li>Conducted testing and optimization of the complete growing system</li>
              </ul>
            </div>

            <div className="detail-section tools-section">
              <h3>Tools/Technologies Used</h3>
              <ul>
                <li><strong>Growing Method:</strong> NFT (Nutrient Film Technique)</li>
                <li><strong>System Capacity:</strong> 24 plant sites</li>
                <li><strong>pH Range:</strong> 5.5-6.5 automated adjustment</li>
                <li><strong>Nutrient Control:</strong> Real-time monitoring and dosing</li>
                <li><strong>Control:</strong> Arduino-based automation system</li>
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h3>Skills Demonstrated</h3>
            <div className="skills-grid">
              <span className="skill-tag">Hydroponics</span>
              <span className="skill-tag">Automation</span>
              <span className="skill-tag">Control Systems</span>
              <span className="skill-tag">Programming</span>
              <span className="skill-tag">Electronics</span>
              <span className="skill-tag">CAD Modeling</span>
              <span className="skill-tag">Arduino</span>
              <span className="skill-tag">C++</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Outcomes and Results</h3>
            <ul>
              <li>Successfully completed automated hydroponic system assembly and testing</li>
              <li>Achieved target pH and nutrient control specifications</li>
              <li>Developed user-friendly monitoring interface</li>
              <li>Created comprehensive documentation and maintenance procedures</li>
              <li>Demonstrated practical applications in automated agriculture</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Reflection</h3>
            <p>
              <strong>Challenge:</strong> Balancing system complexity with reliability requirements<br/>
              <strong>Solution:</strong> Optimized sensor selection and redundant control systems<br/><br/>
              
              <strong>Challenge:</strong> Coordinating multiple sensors for accurate pH and nutrient monitoring<br/>
              <strong>Solution:</strong> Advanced sensor fusion algorithms and calibration procedures<br/><br/>
              
              <strong>Challenge:</strong> Ensuring consistent nutrient delivery across all plant sites<br/>
              <strong>Solution:</strong> Comprehensive flow analysis and distribution optimization
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

export default AutomatedNFTHydroponicSystem;

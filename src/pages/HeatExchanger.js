import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import './Projects.css';

function ASUSolarCarWeldingTable() {
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
        <h1>ASU Solar Car Welding Table</h1>
        <p className="project-subtitle">What started it all; a basic weld fixturing table for the solar car</p>
        
        <div className="project-image-gallery">
          <div className="gallery-image-container">
            <img 
              src="https://via.placeholder.com/300x200/007bff/ffffff?text=Welding+Table" 
              alt="Welding Table Design" 
              className="gallery-image"
              onClick={() => openModal("https://via.placeholder.com/800x600/007bff/ffffff?text=Welding+Table", "Welding Table Design")}
            />
          </div>
          <div className="gallery-image-container">
            <img 
              src="https://via.placeholder.com/300x200/28a745/ffffff?text=Fixturing+System" 
              alt="Fixturing System" 
              className="gallery-image"
              onClick={() => openModal("https://via.placeholder.com/800x600/28a745/ffffff?text=Fixturing+System", "Fixturing System")}
            />
          </div>
          <div className="gallery-image-container">
            <img 
              src="https://via.placeholder.com/300x200/dc3545/ffffff?text=Assembly" 
              alt="Table Assembly" 
              className="gallery-image"
              onClick={() => openModal("https://via.placeholder.com/800x600/dc3545/ffffff?text=Assembly", "Table Assembly")}
            />
          </div>
        </div>
      </div>

      <div className="project-detail-content">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            Designed and built a custom welding table with precision fixturing capabilities for the ASU Solar Car project. 
            This foundational project provided the essential workspace and tooling needed for fabricating the solar car 
            chassis and mechanical components, establishing the groundwork for all subsequent solar car development work.
          </p>
        </div>

        <div className="project-details">
          <div className="side-by-side-container">
            <div className="detail-section process-section">
              <h3>Process</h3>
              <ul>
                <li>Designed modular fixturing system for various chassis components</li>
                <li>Developed precision alignment and clamping mechanisms</li>
                <li>Fabricated table structure with integrated measurement grid</li>
                <li>Integrated adjustable supports for different welding positions</li>
                <li>Tested and validated fixturing accuracy and repeatability</li>
              </ul>
            </div>

            <div className="detail-section tools-section">
              <h3>Tools/Technologies Used</h3>
              <ul>
                <li><strong>Table Size:</strong> 4' x 8' working surface</li>
                <li><strong>Fixturing System:</strong> Modular clamping and alignment</li>
                <li><strong>Precision:</strong> ±0.5mm alignment accuracy</li>
                <li><strong>Material:</strong> Steel construction with aluminum fixtures</li>
                <li><strong>Features:</strong> Integrated measurement grid and leveling</li>
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h3>Skills Demonstrated</h3>
            <div className="skills-grid">
              <span className="skill-tag">Welding</span>
              <span className="skill-tag">Fixturing</span>
              <span className="skill-tag">Mechanical Design</span>
              <span className="skill-tag">Fabrication</span>
              <span className="skill-tag">CAD Modeling</span>
              <span className="skill-tag">Precision Assembly</span>
              <span className="skill-tag">SolidWorks</span>
              <span className="skill-tag">Manufacturing</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Outcomes and Results</h3>
            <ul>
              <li>Successfully completed welding table assembly and testing</li>
              <li>Achieved target precision and fixturing specifications</li>
              <li>Enabled efficient fabrication of solar car components</li>
              <li>Established foundation for all subsequent solar car projects</li>
              <li>Created essential workspace for team collaboration</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Reflection</h3>
            <p>
              <strong>Challenge:</strong> Designing a versatile fixturing system for various components<br/>
              <strong>Solution:</strong> Modular design with adjustable clamping mechanisms<br/><br/>
              
              <strong>Challenge:</strong> Ensuring precision alignment across large working surface<br/>
              <strong>Solution:</strong> Integrated measurement grid and leveling system<br/><br/>
              
              <strong>Challenge:</strong> Balancing functionality with cost and time constraints<br/>
              <strong>Solution:</strong> Efficient design using standard materials and fabrication methods
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

export default ASUSolarCarWeldingTable;

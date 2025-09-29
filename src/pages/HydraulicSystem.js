import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import './Projects.css';

function SafetyWireBoltDrillingFixture() {
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
        <h1>Safety Wire Bolt Drilling Fixture</h1>
        <p className="project-subtitle">A fixture used to drill safety wire holes in bolts missing the hole</p>
        
        <div className="project-image-gallery">
          <div className="gallery-image-container">
            <img 
              src="https://via.placeholder.com/300x200/007bff/ffffff?text=Drilling+Fixture" 
              alt="Drilling Fixture Design" 
              className="gallery-image"
              onClick={() => openModal("https://via.placeholder.com/800x600/007bff/ffffff?text=Drilling+Fixture", "Drilling Fixture Design")}
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
              src="https://via.placeholder.com/300x200/dc3545/ffffff?text=Drilling+Process" 
              alt="Drilling Process" 
              className="gallery-image"
              onClick={() => openModal("https://via.placeholder.com/800x600/dc3545/ffffff?text=Drilling+Process", "Drilling Process")}
            />
          </div>
        </div>
      </div>

      <div className="project-detail-content">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            Designed and fabricated a specialized drilling fixture for creating safety wire holes in bolts 
            that were manufactured without the required safety wire hole. This project addressed a common 
            manufacturing issue by providing a precise, repeatable solution for retrofitting bolts with 
            safety wire capabilities.
          </p>
        </div>

        <div className="project-details">
          <div className="side-by-side-container">
            <div className="detail-section process-section">
              <h3>Process</h3>
              <ul>
                <li>Analyzed bolt specifications and safety wire hole requirements</li>
                <li>Designed precision fixturing system for bolt alignment and clamping</li>
                <li>Developed drilling guide system for accurate hole positioning</li>
                <li>Fabricated fixture components using machining and welding</li>
                <li>Tested and validated fixture accuracy and repeatability</li>
              </ul>
            </div>

            <div className="detail-section tools-section">
              <h3>Tools/Technologies Used</h3>
              <ul>
                <li><strong>Fixture Type:</strong> Precision drilling fixture with alignment guides</li>
                <li><strong>Hole Diameter:</strong> 0.0625" (1/16") safety wire holes</li>
                <li><strong>Positioning Accuracy:</strong> ±0.005" hole location precision</li>
                <li><strong>Bolt Size Range:</strong> 1/4" to 3/4" diameter bolts</li>
                <li><strong>Material:</strong> Steel construction with hardened drill bushings</li>
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h3>Skills Demonstrated</h3>
            <div className="skills-grid">
              <span className="skill-tag">Fixturing</span>
              <span className="skill-tag">Precision Drilling</span>
              <span className="skill-tag">Mechanical Design</span>
              <span className="skill-tag">Manufacturing</span>
              <span className="skill-tag">CAD Modeling</span>
              <span className="skill-tag">SolidWorks</span>
              <span className="skill-tag">Quality Control</span>
              <span className="skill-tag">Assembly</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Outcomes and Results</h3>
            <ul>
              <li>Successfully created a reliable drilling fixture for safety wire holes</li>
              <li>Achieved consistent hole positioning accuracy within specifications</li>
              <li>Reduced drilling time and improved process repeatability</li>
              <li>Eliminated the need for expensive bolt replacement</li>
              <li>Created a reusable solution for similar manufacturing challenges</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Reflection</h3>
            <p>
              <strong>Challenge:</strong> Ensuring precise hole alignment in various bolt sizes<br/>
              <strong>Solution:</strong> Adjustable fixturing system with precision alignment guides<br/><br/>
              
              <strong>Challenge:</strong> Maintaining drilling accuracy during the process<br/>
              <strong>Solution:</strong> Hardened drill bushings and secure clamping mechanism<br/><br/>
              
              <strong>Challenge:</strong> Creating a cost-effective solution for bolt retrofitting<br/>
              <strong>Solution:</strong> Simple, robust design using standard manufacturing processes
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

export default SafetyWireBoltDrillingFixture;

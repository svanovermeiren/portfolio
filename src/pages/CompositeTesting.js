import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import ImageCarousel from '../components/ImageCarousel';
import './Projects.css';

function CompositeTesting() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    imageSrc: '',
    imageAlt: '',
    imageCaption: ''
  });

  const openModal = (src, alt, caption) => {
    setModalState({
      isOpen: true,
      imageSrc: src,
      imageAlt: alt,
      imageCaption: caption
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      imageSrc: '',
      imageAlt: '',
      imageCaption: ''
    });
  };

  const carouselImages = [
    {
      src: "https://via.placeholder.com/600x400/007bff/ffffff?text=Material+Testing",
      alt: "Material Testing Setup",
      modalSrc: "https://via.placeholder.com/800x600/007bff/ffffff?text=Material+Testing",
      caption: "Mechanical test setup establishing baseline data for aeration design assumptions."
    },
    {
      src: "https://via.placeholder.com/600x400/28a745/ffffff?text=Data+Analysis",
      alt: "Data Analysis Results",
      modalSrc: "https://via.placeholder.com/800x600/28a745/ffffff?text=Data+Analysis",
      caption: "Analysis informing compressor sizing and diffuser selection for off-grid aeration."
    },
    {
      src: "https://via.placeholder.com/600x400/dc3545/ffffff?text=Lab+Work",
      alt: "Laboratory Testing",
      modalSrc: "https://via.placeholder.com/800x600/dc3545/ffffff?text=Lab+Work",
      caption: "Wet lab validation of flow and oxygen transfer efficiency."
    }
  ];

  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <Link to="/projects" className="back-button">← Back to Projects</Link>
        <h1>AZGFD Aeration Project</h1>
        <p className="project-subtitle">Laid the groundwork for an offgrid aeration system for a fish hatchery in Show Low, AZ</p>
        <ImageCarousel 
          images={carouselImages}
          onImageClick={openModal}
        />
      </div>

      <div className="project-detail-content">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            Conducted comprehensive testing and analysis of composite materials for structural applications. 
            This project involved mechanical testing, data analysis, and material characterization to 
            determine optimal material selection and design parameters for various engineering applications.
          </p>
        </div>

        <div className="project-details">
          <div className="side-by-side-container">
            <div className="detail-section process-section">
              <h3>Process</h3>
              <ul>
                <li>Designed and executed comprehensive material testing protocols</li>
                <li>Conducted tensile, compression, and shear strength testing</li>
                <li>Performed fatigue and impact resistance analysis</li>
                <li>Analyzed test data and generated detailed reports</li>
                <li>Developed material selection criteria for specific applications</li>
              </ul>
            </div>

            <div className="detail-section tools-section">
              <h3>Tools/Technologies Used</h3>
              <ul>
                <li><strong>Materials Tested:</strong> Carbon fiber, glass fiber, and hybrid composites</li>
                <li><strong>Test Types:</strong> Tensile, compression, shear, fatigue, and impact</li>
                <li><strong>Testing Standards:</strong> ASTM and ISO compliance</li>
                <li><strong>Data Points:</strong> 500+ individual test specimens</li>
                <li><strong>Analysis Methods:</strong> Statistical analysis and failure mode investigation</li>
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h3>Skills Demonstrated</h3>
            <div className="skills-grid">
              <span className="skill-tag">Materials Testing</span>
              <span className="skill-tag">Composites</span>
              <span className="skill-tag">Data Analysis</span>
              <span className="skill-tag">Lab Work</span>
              <span className="skill-tag">Statistical Analysis</span>
              <span className="skill-tag">Failure Analysis</span>
              <span className="skill-tag">Testing Equipment</span>
              <span className="skill-tag">Report Writing</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Outcomes and Results</h3>
            <ul>
              <li>Established comprehensive material property database</li>
              <li>Identified optimal material combinations for specific applications</li>
              <li>Developed testing protocols for quality assurance</li>
              <li>Created material selection guidelines for engineering teams</li>
              <li>Published findings in technical documentation</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Reflection</h3>
            <p>
              <strong>Challenge:</strong> Ensuring consistent test conditions and data quality<br/>
              <strong>Solution:</strong> Rigorous testing protocols and statistical validation<br/><br/>
              
              <strong>Challenge:</strong> Analyzing complex failure modes in composite materials<br/>
              <strong>Solution:</strong> Advanced microscopy and failure analysis techniques<br/><br/>
              
              <strong>Challenge:</strong> Correlating laboratory results with real-world performance<br/>
              <strong>Solution:</strong> Comprehensive environmental and loading condition testing
            </p>
          </div>
        </div>
      </div>
      
      <ImageModal
        isOpen={modalState.isOpen}
        imageSrc={modalState.imageSrc}
        imageAlt={modalState.imageAlt}
        imageCaption={modalState.imageCaption}
        onClose={closeModal}
      />
    </div>
  );
}

export default CompositeTesting;

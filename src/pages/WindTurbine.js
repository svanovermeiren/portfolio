import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import './Projects.css';

function WindTurbine() {
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

  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <Link to="/projects" className="back-button">← Back to Projects</Link>
        <h1>Wind Energy Research Project</h1>
        <p className="project-subtitle">Investigated the feasibility of vertical axis wind turbines supplementing horizontal axis turbines</p>
      </div>

      <div className="project-detail-content">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            Vertical axis wind turbines are an experimental and gimmicky type of wind turbine that have been proven as a concept, but is it economically feasible at a large-scale? They are harder to manufacture,
            and less efficient than their horizontal axis counterparts by themselves. However, there is a potential use case for them that may truly harness their full potential, and that is what this research
            project aimed to tackle. Acting as the final report for my graduate level wind energy course, my group and I conducted a presentation and wrote a report on our findings regarding this. Please check it
            out below!
          </p>
        </div>

        <div className="pdf-container">
            <div className="pdf-controls">
              <a 
                href="/Wind Turbine Research Project.pdf" 
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
                <strong>Download Presentation PDF</strong>
              </a>
            </div>
            <div className="pdf-viewer">
              <iframe
                src="/Wind Turbine Research Project.pdf"
                title="Wind Turbine Research Project PDF"
                width="100%"
                height="600px"
                style={{ border: 'none' }}
              />
            </div>
          </div>

          <div className="pdf-container">
            <div className="pdf-controls">
              <a 
                href="/MAE 579 Final Report.pdf" 
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
                <strong>Download Final Report PDF</strong>
              </a>
            </div>
            <div className="pdf-viewer">
              <iframe
                src="/MAE 579 Final Report.pdf"
                title="MAE 579 Final Report PDF"
                width="100%"
                height="600px"
                style={{ border: 'none' }}
              />
            </div>
          </div>

        <div className="project-details">
          <div className="side-by-side-container">
            <div className="detail-section process-section">
              <h3>Process</h3>
              <ul>
                <li>Resarched the primary use cases of vertical axis wind turbines (VAWT)</li>
                <li>Compiled evidence in a report</li>
                <li>Added onto it with original calculations inspired by the research</li>
                <li>Presented findings </li>
              </ul>
            </div>

            <div className="detail-section tools-section">
              <h3>Tools/Technologies Used</h3>
              <ul>
                <li>MATLAB</li>
                <li>PowerPoint</li>
                <li>Word</li>
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h3>Skills Demonstrated</h3>
            <div className="skills-grid">
              <span className="skill-tag">Technical Research</span>
              <span className="skill-tag">Technical Writing</span>
              <span className="skill-tag">Turbomachinery</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Outcomes and Results</h3>
            <p>

              My group and I found that vertical-axis wind turbines have real potential in hybrid systems, where horizontal axis turbines are used in conjunction with vertical axis ones.
              In our preliminary simulations, we saw an observed increase in energy production when arranged in this configuration and the implied economic benefits we thought were worth
              further exploration. Future research could emphasize on optimizing wake interaction models using more advanced computational methods. Long-term reliability and maintenance
              are big factors to be considered, and would probably required prototype moddels of this hybrid system to determine if the benefit outweighs the potential cost.
            </p>
          </div>

          <div className="detail-section">
            <h3>Reflection</h3>
            <p>
              This project was a fun change in what I normally had researched throughout my mechanical engineering degree. Normally researhc topics on projects remained more top-level and broad, not
              delving too deep into the feasibility to one system, however this research project let me focus on one niche concept. Even better, it was a niche concept I did not know much about prior to
              taking this course, and it was pertaining to a renewable energy system which is something I was very interested in. I look to continue widening my horizons to the possiblity of new sustainable ways
              to generate energy, despite the course reaching its end.
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

export default WindTurbine;

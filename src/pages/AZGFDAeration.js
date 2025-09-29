import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import ImageCarousel from '../components/ImageCarousel';
import './Projects.css';

function AZGFDAeration() {
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
      src: require('../images/AZGFD Hatchery.jpeg'),
      alt: "The site where the project was to be deployed - Silver Creek Hatchery",
      modalSrc: require('../images/AZGFD Hatchery.jpeg'),
      caption: "The site where the project was to be deployed - Silver Creek Hatchery",
    },
    {
      src: require('../images/AZGFD Prototype.png'),
      alt: "Small scale proof-of-concept prototype of the aeration system we planned to deploy",
      modalSrc: require('../images/AZGFD Prototype.png'),
      caption: "Small scale proof-of-concept prototype of the aeration system we planned to deploy",
    },
    {
      src: require('../images/AZGFD Prototype Circuit.jpg'),
      alt: "Small scale proof-of-concept prototype of the circuitry we planned to deploy",
      modalSrc: require('../images/AZGFD Prototype Circuit.jpg'),
      caption: "Small scale proof-of-concept prototype of the circuitry we planned to deploy",
    },
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
            In the tail end of my freshman year, I joined ASU's Engineering Projects in Community Service (EPICS) - where I took on my first team leadership role. My role in this project involved leading 
            early-stage system design and validation for an off-grid aeration solution to support a fish hatchery. Work included preliminary testing, data analysis, and early component 
            selection to inform a robust, energy-efficient aeration system architecture. The team and I traveled out to Show Low, Arizona where the hatchery was located to find out more information about the site. 
            I helped create protoype circuits implementing solar power to power an aeration system for the hatchery. 
          </p>
        </div>

        <div className="project-details">
          <div className="side-by-side-container">
            <div className="detail-section process-section">
              <h3>Process</h3>
              <ul>
                <li>Interviewed client to know desired dissolved oxygen output</li>
                <li>Benchmarked with existing aeration systems</li>
                <li>Researched methods to make offgrid power</li>
                <li>Selected preliminary diffuser types and compressor options</li>
                <li>Conducted hand calculations for estimated power requirements</li>
                <li>Developed prototype proof-of-concept areation circuit</li>
                <li>Outlined a roadmap for scaling for on-site installation</li>
              </ul>
            </div>

            <div className="detail-section tools-section">
              <h3>Tools/Technologies Used</h3>
              <ul>
                <li>Solar Panels</li>
                <li>Inverters</li>
                <li>Dissolved Oxygen Sensors</li>
                <li>Air Pumps</li>
                <li>Wiring</li>
                <li>Shunt Resistors</li>
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h3>Skills Demonstrated</h3>
            <div className="skills-grid">
                <span className="skill-tag">Team Leadership</span>
                <span className="skill-tag">Technical Presentation</span>
                <span className="skill-tag">Prototyping</span>
                <span className="skill-tag">Circuit Design</span>
                <span className="skill-tag">Electronic and Sensor Integration</span>
                <span className="skill-tag">Process Documentation</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Outcomes and Results</h3>
            <p>
              With the use of generous EPICS funding and university-provided materials, the team and I were able to conduct many tests on small-scale aeration systems that were solar-powered. To obtain a proof-of-concept
              was a big milestone, however implementing the system at a wide scale was a different beast as the conditions were much different. We were able to present our findings to a panel of industry engineers
              to review our designs and gain valuable feedback to set us up for success. Unfortunately, I left the team before I could see how the concept was implemented at the hatchery as I gained a bigger role in the solar car team, but the direction the project was going was very promising. 
            </p>
          </div>

          <div className="detail-section">
            <h3>Reflection</h3>
            <p>
              This project will always have a special place in my heart for its role in getting me really interested in working in a project team. When I started on this project, I was a young 
              freshman/sophomore still freshly finding out what exactly I wanted to do in engineering, and this project was greatly helpful in realizing my passions. Without being on this project, I would not
              have developed such a strong desire for a career path emphasizing a more sustainable - in any way, shape, or form. I also appreciated the project for diversifying my skills as an engineer by introducing
              me to many concepts on power and circuitry that I would not have received in my undergrad.  
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

export default AZGFDAeration;

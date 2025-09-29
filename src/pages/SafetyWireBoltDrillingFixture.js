import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import ImageCarousel from '../components/ImageCarousel';
import './Projects.css';

function SafetyWireBoltDrillingFixture() {
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
      src: require('../images/Safety Wire Bolt Drilling Fixture CAD With Bolts Wide.png'),
      alt: "SolidWorks assembly CAD model I created of the fixture",
      modalSrc: require('../images/Safety Wire Bolt Drilling Fixture CAD With Bolts Wide.png'),
      caption: "SolidWorks assembly CAD model I created of the fixture",
    },
    {
      src: require('../images/Safety Wire Bolt Drilling Fixture Hole Starter CAD.png'),
      alt: "SolidWorks CAD model of drill guide I created",
      modalSrc: require('../images/Safety Wire Bolt Drilling Fixture Hole Starter CAD.png'),
      caption: "SolidWorks CAD model of drill guide I created",
    },
    {
      src: require('../images/Safety Wire Bolt Drilling Fixture DXF.png'),
      alt: "One DXF generated to laser-cut the fixture",
      modalSrc: require('../images/Safety Wire Bolt Drilling Fixture DXF.png'),
      caption: "One DXF generated to laser-cut the fixture",
    }
  ];

  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <Link to="/projects" className="back-button">← Back to Projects</Link>
        <h1>Safety Wire Bolt Drilling Fixture</h1>
        <p className="project-subtitle">A fixture used to drill safety wire holes in bolts missing the hole</p>
        
        <ImageCarousel 
          images={carouselImages}
          onImageClick={openModal}
        />
      </div>

      <div className="project-detail-content">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            The American Solar Challenge regulations state that all critical fasteners must be augmented in a fashion that they are impossible to loosen unintentionally. For the ASU Solar Car, 
            one of the easiest ways to ensure this is to use bolts that have holes in the head for the critical fasteners, so that safety wire can be routed through. The problem with that was, we already have tons of 
            existing bolts that would work on the car at various locations but they are missing the safety wire bolt hole. To salvage the use of these bolts, I whipped up a design for a jig that could
            be used to drill these bolt holes in existing bolt heads. It's assembled and welded out of several laser-cut mild steel components and is compatible with a few common bolt sizes and types used on the solar
            car.
          </p>
        </div>

        <div className="project-details">
          <div className="side-by-side-container">
            <div className="detail-section process-section">
              <h3>Process</h3>
              <ul>
                <li>Considered existing bolts on the car that required modification</li>
                <li>Established a manufacturing process for making the fixture</li>
                <li>Created a CAD assembly model in SolidWorks</li>
                <li>Generated DXFs of parts to send off for laser-cutting</li>
                <li>TIG welded laser-cut parts together</li>
                <li>Drilled holes for drill bit to pass through</li>
              </ul>
            </div>

            <div className="detail-section tools-section">
              <h3>Tools/Technologies Used</h3>
              <ul>
                <li>SolidWorks</li>
                <li>Weld Fixtures</li>
                <li>Laser Cutting</li>
                <li>TIG Welding</li>
                <li>Drill Press</li>
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h3>Skills Demonstrated</h3>
            <div className="skills-grid">
              <span className="skill-tag">3D Modeling</span>
              <span className="skill-tag">Design for Manufacturing</span>
              <span className="skill-tag">Design for Assembly</span>
              <span className="skill-tag">Prototyping</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Outcomes and Results</h3>
              <p>
                After successfully drilling a hole through a bolt head using the fixture, I knew the design was a success. There was some difficulty drilling at the true position of where the holes were intended to
                go, so I designed a 3D printed spacing jig so that the drill press was guided into the correct position each time. When this was made, it became much easier to make the holes of interest. This project
                was particularly satisfying because it only required 1 interation to prove the concept, which was a nice change of pace.
              </p>
          </div>

          <div className="detail-section">
            <h3>Reflection</h3>
              <p>
                Reflecting on this project, I thought it was a great exercise of designing for manufacturing. There was many manufacturing paths that could've been taken when designing this fixture, but deciding on one and then design in CAD specfically for that use case was satisfying. Because of burrs that are left behind when laser cutting 
                (especially at sharp corners), I added circular cutouts at some vertices to circumvent that issue. If those vertices were left in there, it's very possible we would have had to spent hours filing and deburring
                each corner. It's little things like that that are important when designing for manufacturing, that some people may not be thinking about.
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

export default SafetyWireBoltDrillingFixture;

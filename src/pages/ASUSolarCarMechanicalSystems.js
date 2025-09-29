import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import ImageCarousel from '../components/ImageCarousel';
import './Projects.css';

function ASUSolarCarMechanicalSystems() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    imageSrc: '',
    imageAlt: '',
    imageCaption: '',
    mediaType: 'image'
  });

  const openModal = (src, alt, caption, mediaType = 'image') => {
    setModalState({
      isOpen: true,
      imageSrc: src,
      imageAlt: alt,
      imageCaption: caption,
      mediaType
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      imageSrc: '',
      imageAlt: '',
      imageCaption: '',
      mediaType: 'image'
    });
  };

  const carouselImages = [
    {
      src: require('../images/Mechanical Systems.jpg'),
      alt: "Preliminary dynamic tests of the car",
      modalSrc: require('../images/Mechanical Systems.jpg'),
      caption: "Preliminary dynamic tests of the car",
      className: "mechanical-systems-hero-image"
    },
  ];

  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <Link to="/projects" className="back-button">← Back to Projects</Link>
        <h1>ASU Solar Car Mechanical Systems</h1>
        <p className="project-subtitle">Chassis, Front Suspension, Steering, and Brakes Design, Manufacture, and Assembly</p>
        <ImageCarousel 
          images={carouselImages} 
          onImageClick={openModal}
        />
      </div>

      {/* OVERVIEW --------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <div className="project-detail-content">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            For two years, I was the Mechanical Systems Team Lead on the new, first generation ASU Solar Car team. I was involved in the design, validation, manufacture, and assembly of all mechanical systems on the car. 
            Creating a solar car from the ground up without a legacy design in a heavily gatekept engineering scene was difficult, but I was up for the challenge. From creating 3D sketches in SolidWorks for weldments to 
            running Ansys simulations for verifying designs to getting my hands dirty in the shop - countless hours have been put into every system on this car. Click on the links below to learn more details about the systems I worked on!
          </p>
        </div>

        {/* CHASSIS --------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <div className="sub-projects-grid">
          <Link to="/projects/mechanical-systems/chassis" className="sub-project-card">
            <div className="sub-project-image">
              <img 
                src={require('../images/Me in the Chassis.jpeg')} 
                alt="Chassis" 
                className="chassis-card-image"
              />
            </div>
            <div className="sub-project-content">
              <h3>Chassis</h3>
              <p>The structural framework of the solar car, all systems are connected to this component</p>
              <div className="sub-project-skills">
                <span className="skill-tag">CAD/CAM</span>
                <span className="skill-tag">DFM</span>
                <span className="skill-tag">FEA - Structural</span>
                <span className="skill-tag">Mechanical Design</span>
                <span className="skill-tag">Metal Fabrication</span>
                <span className="skill-tag">TIG Welding</span>
                <span className="skill-tag">Fixturing</span>
                <span className="skill-tag">CNC Routing</span>
                <span className="skill-tag">3D Printing</span>
              </div>
            </div>
          </Link>

          {/* FRONT SUSPENSION --------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <Link to="/projects/mechanical-systems/front-suspension" className="sub-project-card">
            <div className="sub-project-image">
              <img 
                src={require('../images/Front Suspension Real.jpeg')}
                alt="Front Suspension System" 
              />
            </div>
            <div className="sub-project-content">
              <h3>Front Suspension</h3>
              <p>Custom double wishbone suspension system emphasizing a small form factor</p>
              <div className="sub-project-skills">
                <span className="skill-tag">CAD</span>
                <span className="skill-tag">DFM</span>
                <span className="skill-tag">FEA - Structural</span>
                <span className="skill-tag">Mechanical Design</span>
                <span className="skill-tag">Metal Fabrication</span>
                <span className="skill-tag">TIG Welding</span>
                <span className="skill-tag">Fixturing</span>
                <span className="skill-tag">Hardware Assembly</span>
              </div>
            </div>
          </Link>

          {/* STEERING --------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <Link to="/projects/mechanical-systems/steering" className="sub-project-card">
            <div className="sub-project-image">
              <img 
                src={require('../images/Steering CAD Wide.png')}
                alt="Steering System" 
              />
            </div>
            <div className="sub-project-content">
              <h3>Steering</h3>
              <p>Rack and pinion steering assembly designed to comply with the competition regulations</p>
              <div className="sub-project-skills">
                <span className="skill-tag">CAD</span>
                <span className="skill-tag">TIG Welding</span>
                <span className="skill-tag">Vehicle Dynamics</span>
                <span className="skill-tag">Hardware Assembly</span>
                <span className="skill-tag">3D Printing</span>
              </div>
            </div>
          </Link>

          {/* BRAKES --------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <Link to="/projects/mechanical-systems/brakes" className="sub-project-card">
            <div className="sub-project-image">
              <img 
                src={require('../images/Brake Rotor and Caliper CAD.png')}
                alt="Brake System" 
              />
            </div>
            <div className="sub-project-content">
              <h3>Brakes</h3>
              <p>Basic hydraulic braking system built with redundancy to promote safety</p>
              <div className="sub-project-skills">
                <span className="skill-tag">CAD</span>
                <span className="skill-tag">FEA - Thermal</span>
                <span className="skill-tag">Vehicle Dynamics</span>
                <span className="skill-tag">Metal Fabrication</span>
                <span className="skill-tag">Hardware Assembly</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      
      <ImageModal
        isOpen={modalState.isOpen}
        imageSrc={modalState.imageSrc}
        imageAlt={modalState.imageAlt}
        imageCaption={modalState.imageCaption}
        mediaType={modalState.mediaType}
        onClose={closeModal}
      />
    </div>
  );
}

export default ASUSolarCarMechanicalSystems;

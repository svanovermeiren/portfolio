import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import ImageCarousel from '../components/ImageCarousel';
import './Projects.css';

function AutomatedNFTHydroponicSystem() {
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
      src: require('../images/Hydroponic Final System.jpg'),
      alt: "Hydroponic system assembled",
      modalSrc: require('../images/Hydroponic Final System.jpg'),
      caption: "Hydroponic system assembled"
    },
    {
      src: require('../images/Lettuce.png'),
      alt: "Lettuce!",
      modalSrc: require('../images/Lettuce.png'),
      caption: "Lettuce!"
    },
    {
      src: require('../images/Hydroponic Frame CAD.png'),
      alt: "SolidWorks assembly CAD model I created of the hydroponic frame",
      modalSrc: require('../images/Hydroponic Frame CAD.png'),
      caption: "SolidWorks assembly CAD model I created of the hydroponic frame"
    },
    {
      src: require('../images/Hydroponic Circuit Schematic.jpg'),
      alt: "Wiring schematic I created of the sensor-relay-Arduino system",
      modalSrc: require('../images/Hydroponic Circuit Schematic.jpg'),
      caption: "Wiring schematic I created of the sensor-relay-Arduino system"
    },
    {
      src: require('../images/Soldering The Pumps Circuits.jpg'),
      alt: "Close-up of the 3D printed housing for the sensitive electronics",
      modalSrc: require('../images/Soldering The Pumps Circuits.jpg'),
      caption: "Close-up of the 3D printed housing for the sensitive electronics"
    },
    {
      src: require('../images/Jesse.jpg'),
      alt: "My friend cutting the PVC pipes to size",
      modalSrc: require('../images/Jesse.jpg'),
      caption: "My friend cutting the PVC pipes to size"
    },
  ];

  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <Link to="/projects" className="back-button">← Back to Projects</Link>
        <h1>Automated NFT Hydroponic System</h1>
        <p className="project-subtitle">Created a hydroponic system that actively adjusts water nutrient level and pH</p>
        
        <ImageCarousel 
          images={carouselImages}
          onImageClick={openModal}
        />
      </div>

      <div className="project-detail-content">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            Designed and built a completely automated NFT (Nutrient Film Technique) hydroponic system that actively 
            monitors and adjusts water nutrient levels and pH. This project was a good exercise for me and my other mechanical 
            engineering friend to practice mechanical design, creating electronic control systems, and software programming 
            to create a fully automated growing system capable of maintaining optimal growing conditions.
          </p>
        </div>

        <div className="project-details">
          <div className="side-by-side-container">
            <div className="detail-section process-section">
              <h3>Process</h3>
              <ul>
                <li>Determine a plant of interest and the its ideal water conditions</li>
                <li>Made a preliminary CAD model for water circulation</li>
                <li>Designed and programmed sensor-pump circuit</li>
                <li>Fabricated the hydroponic frame and channels</li>
                <li>Tested the circulation and active water adjustment</li>
                <li>Profit with plant!</li>
              </ul>
            </div>

            <div className="detail-section tools-section">
              <h3>Tools/Technologies Used</h3>
              <ul>
                <li>SolidWorks</li>
                <li>Arduino</li>
                <li>Peristaltic pumps</li>
                <li>Water pump</li>
                <li>Wire crimpers</li>
                <li>Relays</li>
                <li>Breadboard</li>
                <li>3D Printing</li>
                <li>Shop tools</li>
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h3>Key Features</h3>
            <ul>
                <li>Automated monitoring and adjustment of nutrient and pH level</li>
                <li>Real time data logging</li>
                <li>3D printed housing for electronics</li>
                <li>Aluminum frame and PVC channels</li>
              </ul>
          </div>

          <div className="detail-section">
            <h3>Skills Demonstrated</h3>
            <div className="skills-grid">
              <span className="skill-tag">SolidWorks</span>
              <span className="skill-tag">Circuit Design</span>
              <span className="skill-tag">Arduino Programming</span>
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">Sensor Integration</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Outcomes and Results</h3>
            <p>
              By pairing an Arduino with a pH sensor, total-dissolve solid sensor, and water pump, we were able to successfully create a hydroponic system that maintains optimal water conditions
              for any plant. The system dispenses acid or base depending on the pH reading, or more nutrients depending on the TDS reading. The lettuce grew beautifully. I also would like to compare 
              the systems grow speed compared to a non-enhance lettuce. For this specific system, we wanted to start up with a simpler plant to prove the concept like lettuce. We plan to enhance the 
              setup with additional software and hardware features, such as an IoT device to give the system internet functionality. Additionally, we also plan to implement more in depth data metrics, 
              with graphs over time and possibly a better reinforced frame.
            </p>
          </div>

          <div className="detail-section">
            <h3>Reflection</h3>
            <p>
              Reflecting on this project, it reminds me of the simpler ways engineering can be utilized to optimize and solve everyday problems. This was one of the first projects I completed outside of the guidance
              of a professor or employer, and it was especially rewardinng to acheive the result because of that. Back then, in small personal projects like this, I often felt uncertain because it seemed like the
              barrier to entry was just too high and it was difficult to commit. After doing this project, I am now constantly looking for similar aspects in my life that can be optimized with projects like this; sp I can be pushed
              to think and engineer beyond the classroom or the workplace.
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

export default AutomatedNFTHydroponicSystem;

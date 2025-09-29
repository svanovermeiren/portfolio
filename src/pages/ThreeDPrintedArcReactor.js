import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import ImageCarousel from '../components/ImageCarousel';
import './Projects.css';

function ThreeDPrintedArcReactor() {
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
      src: require('../images/Arc Reactor.jpeg'),
      alt: "Finished arc reactor prop",
      modalSrc: require('../images/Arc Reactor.jpeg'),
      caption: "Finished arc reactor prop",
    },
    {
      src: require('../images/Arc Reactor CAD.png'),
      alt: "SolidWorks assembly CAD model I created of the arc reactor",
      modalSrc: require('../images/Arc Reactor CAD.png'),
      caption: "SolidWorks assembly CAD model I created of the arc reactor",
    },
    {
      src: require('../images/Reactor Soldering Job.jpeg'),
      alt: "The soldering job on the LEDs... not pretty but it did the trick",
      modalSrc: require('../images/Reactor Soldering Job.jpeg'),
      caption: "The soldering job on the LEDs... not pretty but it did the trick",
    },
    {
      src: require('../images/Comparison.png'),
      alt: "How did I do?",
      modalSrc: require('../images/Comparison.png'),
      caption: "How did I do?",
      className: "arc-reactor-comparison-image",
    },
  ];

  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <Link to="/projects" className="back-button">← Back to Projects</Link>
        <h1>3D Printed Arc Reactor</h1>
        <p className="project-subtitle">A custom-designed and fabricated Halloween costume component showcasing the power of additive manufacturing</p>
        
        <ImageCarousel 
          images={carouselImages}
          onImageClick={openModal}
        />
      </div>

      <div className="project-detail-content">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            Feeling particularly determined one Halloween, I wanted to make an Iron Man related constume but I didn't have enough time to prototype and develop a whole suit. Instead, I opted
            for a more subtle interpretation and decided to be Cave Tony Stark for Halloween. This still required an arc reactor prop to wear, and making that was much more doable. It was designed
            in SolidWorks and 3D printed with holes for LEDs. The LEDs were soldered together in parallel and to a 5V battery to allow it to be transportable. I was then able to duct tape the reactor
            to my chest, for a lack of a better solution in the time I had. Under the tank top, I think it looked pretty convincing. I was able to make the whole prop in just two days! 
          </p>
        </div>

        <div className="project-details">
          <div className="side-by-side-container">
            <div className="detail-section process-section">
              <h3>Design Process</h3>
              <ul>
                <li>Created a CAD model assembly of the arc reactor</li>
                <li>3D printed the model</li>
                <li>Soldered over 10 LEDs together in parallel</li>
                <li>Sealed exposed wire with electrical tape</li>
              </ul>
            </div>

            <div className="detail-section tools-section">
              <h3>Tools/Technologies Used</h3>
              <ul>
                <li>SolidWorks</li>
                <li>3D Printing</li>
                <li>LEDs</li>
                <li>Soldering Iron</li>
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h3>Skills Demonstrated</h3>
            <div className="skills-grid">
              <span className="skill-tag">3D Modeling</span>
              <span className="skill-tag">Circuit Design</span>
              <span className="skill-tag">Additive Manufacturing</span>
              <span className="skill-tag">Soldering</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Outcomes and Results</h3>
            <ul>
              This project was a peak example of the power 3D printing. Prior to the existence of this technology, it would not have been possible to make an item of this quality in a pinch. It gave me a newfound
              appreciation for today's world that if I need to whip up a custom Halloween costume in a rush, I can do it at will. The lights stayed functional up into a bit later in the night, where I believe
              one of the soldering connections came lose, turning off the reactor lights completely. If I had more time, I would have made the soldering connections stronger and better concealed so this wouldn't happen.
              Overall, I was very happy with the result, and it was a fun conversation topic.
            </ul>
          </div>

          <div className="detail-section">
            <h3>Reflection</h3>
            <p>
              Reflecting on this project, it was an incredible 2 day journey of exercising creativity and readily available engineering processes. 3D printing in general has been such a huge part of my engineering career. 
              Each print presents unique challenges, from optimizing designs for printability to fine-tuning printer settings for the best results. This process has not only improved my CAD skills for the better but also 
              has been greatly helpful in making my ideas come to life. Moving forward, I'm excited to explore more complex designs, experiment with fancier materials, and integrate more sophisticated electronics into my 
              prints for interactive projects.
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

export default ThreeDPrintedArcReactor;

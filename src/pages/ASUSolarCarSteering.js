import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import ImageCarousel from '../components/ImageCarousel';
import './Projects.css';

function ASUSolarCarSteering() {
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
      src: require('../images/Steering CAD Wide.png'),
      alt: "SolidWorks CAD assembly model of our steering system in the chassis",
      modalSrc: require('../images/Steering CAD Wide.png'),
      caption: "SolidWorks CAD assembly model of our steering system in the chassis",
    },
    {
      src: require('../images/Front Suspension Real.jpeg'),
      alt: "Steering system fully assembled in the chassis",
      modalSrc: require('../images/Front Suspension Real.jpeg'),
      caption: "Steering system fully assembled in the chassis",
    },
    {
      src: require('../images/Custom Tie Rods.jpeg'),
      alt: "Our custom tie rods that connect the rack and pinion to the upright (jam nuts not shown)",
      modalSrc: require('../images/Custom Tie Rods.jpeg'),
      caption: "Our custom tie rods that connect the rack and pinion to the upright (jam nuts not shown)",
    },
    {
      src: require('../images/Steering Wheel Exploded View.png'),
      alt: "Exploded view of our steering wheel assembly (fasteners not shown)",
      modalSrc: require('../images/Steering Wheel Exploded View.png'),
      caption: "Exploded view of our steering wheel assembly (fasteners not shown)",
    },
    {
      src: require('../images/Custom Shaft Clevis.jpeg'),
      alt: "Custom machined shaft clevis containing a needle roller bearing used to mount steering shaft",
      modalSrc: require('../images/Custom Shaft Clevis.jpeg'),
      caption: "Custom machined shaft clevis containing a needle roller bearing used to mount steering shaft",
      className: "shaft-clevis-image"
    },
  ];

  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <Link to="/projects/solar-car-mechanical-systems" className="back-button">← Back to Mechanical Systems</Link>
        <h1>Steering</h1>
        <p className="project-subtitle">Rack and pinion assembly designed to comply with competition regulations</p>
        <ImageCarousel 
          images={carouselImages} 
          onImageClick={openModal}
        />
      </div>

      <div className="project-detail-content">
        <div className="project-overview">
          <h2>System Overview</h2>
          <p>
            I oversaw the design process of our steering system and components. The American Solar Challenge requires all
            competitors to be able to make turns with a certain turn radius, so the biggest point of emphasis on this system was to ensure it reached that metric. There were some different 
            options available to acheive this, but the team and I decided to go with the proven and reliable rack and pinion steering technqiue, rather than steer by wire. To ensure the most optimal
            steering geometry, an Ackermann sketch was produced to minimize tire slippage and ensure that the turn radius metric was reached. Using this technique, we were able to converge on a 
            steering ratio for the rack and pinion. The steering shaft, column, and universal joints were purchased off the shelf based on rack compatibility and chassis geometry. Other components 
            like the steering wheel and tie rods were custom designed and fabricated. The steering wheel was an assembly comprised of an aluminum plate and 3D printed external covers/grips fastened
            with screws. The tie rods were made of 4130 chromoly steel tubing with adjustable rod ends welded to either side. This allows for us to adjust the toe of the solar car. Custom mounting 
            methods also needed to be considered to fix the steering shaft and columns in the chassis.
          </p>
        </div>

        <div className="project-details">
          <div className="side-by-side-container">
            <div className="detail-section process-section">
              <h3>Design Process</h3>
              <ul>
                <li>Made Ackermann steering geometry drawings using a set wheel base and desired turn radius</li>
                <li>Calculate a steering rack ratio based on the desired turn angles in the Ackermann drawing</li>
                <li>Selected rack and pinion and then other components based on comaptibility </li>
                <li>Iterated the steering wheel shape using 3D prints before converging on a confortable configuration</li>
                <li>Fabricated and welded in mounts for the steering system</li>
                <li>Assembled the system within the chassis</li>
              </ul>
            </div>

            <div className="detail-section tools-section">
              <h3>Tools/Technologies Used</h3>
              <ul>
                <li>SolidWorks</li>
                <li>CNC Mill</li>
                <li>3D Printing</li>
                <li>Laser Cutting</li>
                <li>Drill Press</li>
                <li>Tube Notching</li>
                <li>TIG Welding</li>
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h3>Skills Demonstrated</h3>
            <div className="skills-grid">
              <span className="skill-tag">Team Leadership</span>
              <span className="skill-tag">Vehicle Dynamics</span>
              <span className="skill-tag">CAD</span>
              <span className="skill-tag">DFM</span>
              <span className="skill-tag">Fixturing</span>
              <span className="skill-tag">Metal Fabrication</span>
              <span className="skill-tag">Hardware Assembly</span>
            </div>
          </div>

          <div className="project-overview">
            <h2>Outcomes and Results</h2>
              <p>
                Once the fabrication and assembly was finished and I finally had the chance to test what turning the steering wheel would do. At face value, there was no linkage interference or excessive steering resistance, which I was glad to see. However, I soon came to a horrifying 
                realization: the steering rack was installed backwards! Because of this oversight, a whole day's time was spent on adjusting the steering rack's mounting point to accomodate a steering rack mounted correctly. Was quite annoying when it 
                unfolded, but now is a funny story and a chance to learn an important lesson on installing sytems in which direction of travel is paramount. Once this issue was resolved, we were able to test the turn radius of the car finally. In our preliminary
                tests, we were compliant with the turn radius metric and stability of the car felt good. We plan to add steering stops with the rack sleeve to prevent undesirable over-steer, and to continue testing the steering dynamics as more components and weight is added to the car in 2025.
              </p>
          </div>

          <div className="project-overview">
            <h2>Reflection</h2>
              <p>
                This system was fun to work on, especially when designing and prototyping my favorite component - the steering wheel. In this one part, I was able exercise a bit of artistic liberty, while making sure to conform with regulations.
                Being a fan of Formula 1, I always thought the yoke steering wheel would have been an awesome wheel to implement in the car for racing purposes, and I was given the chance to do that on the solar car.
                Considering we do not have the budget for a carbon fiber wheel, I opted for a cheaper alternative made of aluminum and 3D printed grips, and intentionally leaving space for future button functionality. 
                It was a fun process to iterate between different steering wheel grips to find the most comfortable configuration to drive with. Aside from the fabrication hiccup of installing the steering rack backwards,
                it was so satisfying to finally gain the functionality to steer the solar car, even better to do it without interference on our first attempt. It's seeing moving systems like these that remind me why I love
                engineering and seeing a plan unfold despite its challenges.
              </p>
          </div>
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

export default ASUSolarCarSteering;




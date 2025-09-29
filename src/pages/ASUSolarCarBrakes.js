import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import ImageCarousel from '../components/ImageCarousel';
import './Projects.css';

function ASUSolarCarBrakes() {
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
      src: require('../images/Front Suspension Real.jpeg'),
      alt: "Brembo brake caliper installed on the upright and connected to the brake lines",
      modalSrc: require('../images/Front Suspension Real.jpeg'),
      caption: "Brembo brake caliper installed on the upright and connected to the brake lines",
    },
    {
      src: require('../images/Brake Rotor and Caliper CAD.png'),
      alt: "SolidWorks assembly CAD model of the caliper and brake rotor",
      modalSrc: require('../images/Brake Rotor and Caliper CAD.png'),
      caption: "SolidWorks assembly CAD model of the caliper and brake rotor",
    },
    {
      src: require('../images/Brake Pedal and Mount.jpeg'),
      alt: "SolidWorks assembly CAD model of the caliper and brake rotor",
      modalSrc: require('../images/Brake Pedal and Mount.jpeg'),
      caption: "SolidWorks assembly CAD model of the caliper and brake rotor",
    },
  ];

  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <Link to="/projects/solar-car-mechanical-systems" className="back-button">← Back to Mechanical Systems</Link>
        <h1>Brakes</h1>
        <p className="project-subtitle">Basic hydraulic braking system built with redundancy to promote safety</p>
        <ImageCarousel 
          images={carouselImages} 
          onImageClick={openModal}
        />
      </div>

      <div className="project-detail-content">
        <div className="project-overview">
          <h2>System Overview</h2>
          <p>
            The main point of emphasis for this braking system is guaranteed stopping power, rather than performance. Due to the nature of the American Solar Challenge, the objective for
            the brakes is reliabiltiy and efficiency. We tried to implement this is in the simplest fashion possible with a brake pedal that is connected to two independent master cylinders.
            With this set up, one master cylinder can fail completely and the car will still have braking force applied to both the front and rear wheels, which is required in the competition. 
            Funnily enough, even though the objective was not performance in the design of this system, we were fortunate to be gifted some second-hand Brembo brake calipers from 
            ASU's Formula SAE team. On top of the reliability the redundant system provides, we can be confident that they also have the stopping power that Formula SAE cars have as well.
            Our brake rotors were custom designed and laser-cut out of 4130 chromoly steel, in an effort to have a durable and stiff surface for the calipers to clamp onto. The rotor design
            was iterated upon using Ansys to maximize heat dissipation on the hardest braking loads. 
          </p>
        </div>

        <div className="project-details">
          <div className="side-by-side-container">
            <div className="detail-section process-section">
              <h3>Process</h3>
              <ul>
                <li>Created a brake line schematic that complies with American Solar Challenge regulations</li>
                <li>Selected master cylinder and brake line components based on calculations of car's resulting weight and max speed</li>
                <li>Designed and validated brake rotor models that were compatible with the given Brembo brake calipers</li>
                <li>Assembled system with proper hardware</li>
              </ul>
            </div>

            <div className="detail-section tools-section">
            <h3>Tools/Technologies Used</h3>
              <ul>
                <li>SolidWorks</li>
                <li>Ansys</li>
                <li>Laser Cutting</li>
                <li>TIG Welding</li>
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h3>Skills Demonstrated</h3>
            <div className="skills-grid">
              <span className="skill-tag">Team Leadership</span>
              <span className="skill-tag">CAD</span>
              <span className="skill-tag">FEA</span>
              <span className="skill-tag">Fixturing</span>
              <span className="skill-tag">Metal Fabrication</span>
            </div>
          </div>

          <div className="project-overview">
            <h2>Outcomes and Results</h2>
              <p>
                By implementing two independent master cylinders in a hydraulic system connected to a brake pedal,the team and I were able to successfully create a mechanism that stops the solar car and complies with the American Solar Challenge regulations.
                There are plans to enhance the set up by making the brake pedal assembly more compact. To minimize weight, the cockpit of the solar car is on the smaller side, and the brake pedal that was purchased should be slightly minimized as a result of this.
                I believe that this could be a good project, as it could be a potentially good exercise on designing a part in CAD and getting it machined professionally at school, communicating with the CNC techs. Personally, I think that the more parts of the car
                that are custom-made, the better as it keeps the team well rounded in all aspects of design, and understanding the nuances of product implementation that buying something off the shelf does not provide. Additionally, we receive a system that is better
                catered to the car's geometry. As the car continues to be added onto in 2025, the brakes will continually be tested for failure.
              </p>
          </div>

          <div className="project-overview">
            <h2>Reflection</h2>
              <p>
                Reflecting on the making of this system, I feel very fortunate to have been given brake calipers by our fellow collegiate competition team Formula SAE. It reminds me of how important communication can be and
                that it is okay to ask for help. Obviously, this isn't the right practice in many cases (giving project advice to a direct competitor), but in this case because we are two different scopes of motor sport, there
                was no harm in doing so. As I enter the twilight of my time on the solar car team, I want to carry on the generous giving of knowledge to other up and coming student engineering organizations that may need it.
                After aiding in assembling this system, I learned a great deal of knowledge about the mechanical concepts that accompany braking systems and what needs to considered in their design and how to allow for adjustability. 
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

export default ASUSolarCarBrakes;




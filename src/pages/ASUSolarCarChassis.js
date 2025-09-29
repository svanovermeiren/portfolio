import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import ImageCarousel from '../components/ImageCarousel';
import './Projects.css';

function ASUSolarCarChassis() {
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
      src: require('../images/Me in the Chassis.jpeg'),
      alt: "Me inside the chassis!",
      modalSrc: require('../images/Me in the Chassis.jpeg'),
      caption: "Me inside the chassis!",
      className: "chassis-person-image"
    },
    {
      src: require('../images/Chassis.png'),
      alt: "SolidWorks weldment CAD model used in all of our solar car assemblies",
      modalSrc: require('../images/Chassis.png'),
      caption: "SolidWorks weldment CAD model used in all of our solar car assemblies"
    },
    {
      src: require('../images/Frontal Impact FEA.png'),
      alt: "Ansys solution simulating a frontal impact on the chassis",
      modalSrc: require('../images/Frontal Impact FEA.png'),
      caption: "Ansys solution simulating a frontal impact on the chassis"
    },
    {
      src: require('../images/Fixture CAD.png'),
      alt: "To make the chassis a reality, I designed custom fixtures out of modular laser-cut steel, CNC routed MDF, and 3D printed parts around the chassis model",
      modalSrc: require('../images/Fixture CAD.png'),
      caption: "To make the chassis a reality, I designed custom fixtures out of modular laser-cut steel, CNC routed MDF, and 3D printed parts around the chassis model"
    },
    {
      src: require('../images/Fixtures Real.jpg'),
      alt: "Welding fixtures on our welding table keeping our tubes located",
      modalSrc: require('../images/Fixtures Real.jpg'),
      caption: "Welding fixtures on our welding table keeping our tubes located"
    },
  ];

  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <Link to="/projects/solar-car-mechanical-systems" className="back-button">← Back to Mechanical Systems</Link>
        <h1>Chassis</h1>
        <p className="project-subtitle">Foundational structure providing primary framework for all mechanical systems</p>
        <ImageCarousel 
          images={carouselImages} 
          onImageClick={openModal}
        />
      </div>

      <div className="project-detail-content">
        <div className="project-overview">
          <h2>System Overview</h2>
          <p>
            Inheriting this chassis design from a previous mechanical lead, it was up to me to put the finishing touches on it and begin the process of fabricating it. The chassis is made out of 4130 chromoly steel tubing,
            all hand-cut and coped with shop tools and TIG welded together by the mechanical team. This system took the most elbow grease out of any of the others, and I couldn't have gotten to the end result by myself.
            The making of this system was a real team effort which was our first real opportunity to showacse our ability to make a CAD weldment assembly a reality by consulting relevant mentors, designing and fabricating fixtures, 
            and using shop fabrication tools.
          </p>
        </div>

        <div className="project-details">
          <div className="side-by-side-container">
            <div className="detail-section process-section">
              <h3>Design Process</h3>
              <ul>
                <li>Created a 3D sketch weldment in SolidWorks to generate tube structure</li>
                <li>Measured chassis dimensions to ensure compliance with American Solar Challenge regulations</li>
                <li>Validated design in various loading conditions set by the competition in Ansys</li>
                <li>Designed and fabricated weld fixtures to fix and locate steel tubes in the welding table</li>
                <li>Cut and coped steel tubes to fit in fixture akin to CAD</li>
                <li>TIG'd it Up!</li>
              </ul>
            </div>

            <div className="detail-section tools-section">
              <h3>Tools/Technologies Used</h3>
              <ul>
                <li>SolidWorks</li>
                <li>Ansys</li>
                <li>CNC Routing</li>
                <li>Laser Cutting</li>
                <li>Tube Notching</li>
                <li>Tube Bending</li>
                <li>TIG Welding</li>
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h3>Skills Demonstrated</h3>
            <div className="skills-grid">
              <span className="skill-tag">Team Leadership</span>
              <span className="skill-tag">CAD/CAM</span>
              <span className="skill-tag">FEA</span>
              <span className="skill-tag">DFM</span>
              <span className="skill-tag">Fixturing</span>
              <span className="skill-tag">Metal Fabrication</span>
            </div>
          </div>

          <div className="project-overview">
            <h2>Outcomes and Results</h2>
              <p>
                Because this was the first mechanical system of the car to be made, creating it was not without its challenges. I, alongside many other members of the mechanical team had even not picked up or looked at an angle grinder or 
                or a welding torch before. In addition to this, because of our low budget and our desire to learn, our decision to hand cut and cope the steel tubing ended up being a large investment of time. To get the chassis done within a 
                reasonable time frame, the team and I worked tirelessly for months to assemble and weld the frame. After many long weekends and nights in the shop, the chassis was finally complete, just in time to display it at Electrify Expo 2024. 
                One of the most notable challenges was figuring out how to accurately and predictably bend our roll cage tubes. Thankfully, we had external connections with extensive experience in bending tube for these applications and we learned
                a lot from them. The chassis is set to be painted in 2025, once all mounting points are finalized.
              </p>
          </div>

          <div className="project-overview">
            <h2>Reflection</h2>
              <p>
                This system gave me my first experiences using metal fabrication tools and TIG welding in a motorsport application, giving me the foundational skills I needed to design items for fabrication in the future. 
                If I were to do it all over again, I think it would have made sense to go through with the monetary investment of getting our steel tubing laser-coped through an external source, for the valuable time savings. 
                Even so, though the making of this system was very challenging in a physical labor aspect, I thoroughly enjoyed the work. I learned so many important concepts of making a good chassis; verifying that it is properly
                triangulated everywhere, ensuring there is enough clearance for suspension linkage, and planning ahead with design intent for future component mounting points. Making this system made me realize I love the challenge,
                and I was excited to see what other designs I could apply the knowledge and skills I gained.
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

export default ASUSolarCarChassis;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import ImageCarousel from '../components/ImageCarousel';
import './Projects.css';

function ASUSolarCarFrontSuspension() {
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
      alt: "The double wishbone suspension in all of its glory",
      modalSrc: require('../images/Front Suspension Real.jpeg'),
      caption: "The double wishbone suspension in all of its glory",
      className: "double-wishbone"
    },
    {
      src: require('../images/Front Suspension CAD.png'),
      alt: "SolidWorks assembly CAD model I created of the front suspension",
      modalSrc: require('../images/Front Suspension CAD.png'),
      caption: "SolidWorks assembly CAD model I created of the front suspension"
    },
    {
      src: require('../images/4 Control Arms.jpeg'),
      alt: "Simple welded chromoly steel control arms assembled with hardware",
      modalSrc: require('../images/4 Control Arms.jpeg'),
      caption: "Simple welded chromoly steel control arms assembled with hardware"
    },
    {
      src: require('../images/Control Arm Stress.PNG'),
      alt: "Ansys Structural simulation of the maximum stress the control arm will experience",
      modalSrc: require('../images/Control Arm Stress.PNG'),
      caption: "Ansys Structural simulation of the maximum stress the control arm will experience"
    },
    {
      src: require('../images/Control Arms.jpg'),
      alt: "Control arm in the fixture plate designed to locate important mounting holes",
      modalSrc: require('../images/Control Arms.jpg'),
      caption: "Control arm in the fixture plate designed to locate important mounting holes"
    },
    {
      src: require('../images/Welding the Control Arms.jpeg'),
      alt: "TIG welding the control arms",
      modalSrc: require('../images/Welding the Control Arms.jpeg'),
      caption: "TIG welding the control arms"
    },
    {
      src: require('../images/Hub and Spindles and Upright.jpeg'),
      alt: "Weld Fixturing CAD Model",
      modalSrc: require('../images/Hub and Spindles and Upright.jpeg'),
      caption: "Freshly machined upright, spindle, and wheel hub, interfacing as intended"
    },
    {
      src: require('../images/CNC Milling.jpeg'),
      alt: "Upright in the CNC mill fixture, mid-operation",
      modalSrc: require('../images/CNC Milling.jpeg'),
      caption: "Upright in the CNC mill fixture, mid-operation"
    },
    {
      src: require('../images/Press Fitting the Bearings.jpeg'),
      alt: "Using an arbor press to press-fit bearings into the uprights",
      modalSrc: require('../images/Press Fitting the Bearings.jpeg'),
      caption: "Using an arbor press to press-fit bearings into the uprights"
    },
  ];

  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <Link to="/projects/solar-car-mechanical-systems" className="back-button">← Back to Mechanical Systems</Link>
        <h1>Front Suspension</h1>
        <p className="project-subtitle">Custom double wishbone suspension system emphasizing a small form factor</p>
        <ImageCarousel 
          images={carouselImages} 
          onImageClick={openModal}
        />
      </div>

      <div className="project-detail-content">
        <div className="project-overview">
          <h2>System Overview</h2>
          <p>
            While chassis fabrication was happening, I designed our front suspension simultaneously to ensure compatibility. One of the bigger goals with this car was to maintain a thin profile, and keep our track width low - while 
            still being mindful of the possibility of stability loss. A double wishbone configuration was chosen for its overall mechanical simplicity and ease of manufacturing, while still acheiving the objective. It is comprised of 
            an array of major components:
            <ul>Uprights</ul>
            <ul>Wheel Hubs</ul>
            <ul>Spindles</ul>
            <ul>Control Arms</ul>
            <ul>Coil Over Shocks</ul>
            The uprights were machined out of 6061-T6 aluminum, serving as the component where the spindle, control arms, brake caliper, and steering linkage all interface. Similarly, the wheel hubs and spindles machined and turned respectively out 6061.
            These components directly mate with each other with bolts and weld reinforcement. The control arms were assembled out of mixture of welded 4130 chromoly steel tubing, weldable rod ends, and speherical bearings. This gave the control arms
            full adjustability, sufficient travel, and strength for the application. Lastly, the coil over shocks were purchased off the shelf as a full assembly with a spring stiffness and size that fit our need. 
            This system gave me the opportunity to exercise my DFM skills, requiring extensive communication with the ASU machinists to make sure the design components were feasibly and optimally manufacturable.
          </p>
        </div>

        <div className="project-details">
          <div className="side-by-side-container">
            <div className="detail-section process-section">
              <h3>Design Process</h3>
              <ul>
                <li>Iterated in SolidWorks with a 3D sketch modeling the dynamic travel of the shock and linkage</li>
                <li>Modeled uprights and control arm assemblies, considering COTS hardware that each part needed to interface with</li>
                <li>Validated individual part response to shock loads in Ansys</li>
                <li>Communicated DFM strategy with ASU machine shop to machine/turn uprights, wheel hubs, and spindles</li>
                <li>Designed weld fixtures for control arms to locate rod ends and spherical bearings at true position during welding</li>
                <li>Assembled system with proper hardware</li>
              </ul>
            </div>

            <div className="detail-section tools-section">
              <h3>Tools/Technologies Used</h3>
              <ul>
                <li>SolidWorks</li>
                <li>Ansys</li>
                <li>CNC Mill</li>
                <li>CNC Lathe</li>
                <li>Laser Cutting</li>
                <li>Tap Drill</li>
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
              <span className="skill-tag">CAD/CAM</span>
              <span className="skill-tag">Finite Element Analysis</span>
              <span className="skill-tag">Design for Manufacturing</span>
              <span className="skill-tag">Fixturing</span>
              <span className="skill-tag">Metal Fabrication</span>
              <span className="skill-tag">Hardware Assembly</span>
            </div>
          </div>

          <div className="project-overview">
            <h2>Outcomes and Results</h2>
              <p>
                The final assembly of the front suspension double wishbone went surprisingly well. The inclusion of adjustable threaded rod ends made for a very easy assembly process. When everything was attached there was no sign of interference
                during turning, speed bumps, and other dynamic tests. Additionally, there was no signs of plastic deformation or yielding in any part, which reinforced the Ansys results. Having had much experience with steel and welding it after the 
                chassis the mechanical team made a much cleaner result for the control arms, which I would say are some of the most aethestically pleasing components on the solar car. One part of the assembly process that remains challenging however,
                is placing the shocks inside their mounting points. I plan to design a custom shock compressor - catered to our spring size, to hopefully make that process go more smoothly. Overall, the team and I look to continue testing the front suspension 
                under full car weight later in the 2025 school year. 
              </p>
          </div>

          <div className="project-overview">
            <h2>Reflection</h2>
              <p>
                This system really strengthened my understanding of the importance of designing parts that are possible to make with machines that are widely available in engineering. Communicating with machinists has taught me 
                tons about the easiest and most cost effective to acheive certain features in machined parts. Considering how valuable doing this is in industry, I consider this experience invaluable. Some decisions in the suspension
                design process were made without the input of a machinist, and definitely made some aspects of the system more difficult to make. Given the opportunity to do it again, I would have made the hub and spindle in one machined
                part vs two, as the cost difference does not end up being worth the added machining time. Additionally, I was made aware of the importance of knowing the standard hardware on the shelf and making sure custom designed parts
                interface with what is accessible off the shelf. It would be undesirable to design a part that uses a very niche bolt or bearing size when it could be avoided, and then have to pay a premium for a rarer COTS part. In contrast
                to the chassis, I had full design ownership of the hardware in this system and it was a real treat to see my work come to life. 
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

export default ASUSolarCarFrontSuspension;




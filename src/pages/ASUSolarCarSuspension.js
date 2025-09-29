import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import ImageCarousel from '../components/ImageCarousel';
import './Projects.css';

function ASUSolarCarSuspension() {
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
      src: require('../images/Me with the Trailing Arm.jpeg'),
      alt: "Me with the trailing arm!",
      modalSrc: require('../images/Me with the Trailing Arm.jpeg'),
      caption: "Me with the trailing arm!",
      className: "double-wishbone"
    },
     {
       src: require('../images/Me with the Wheel Adapter.jpeg'),
       alt: "Me holding our electric motor and wheel adapter (so heavy!)",
       modalSrc: require('../images/Me with the Wheel Adapter.jpeg'),
       caption: "Me holding our electric motor and wheel adapter (so heavy!)",
       className: "wheel-adapter-image"
     },
    {
      src: require('../images/Rear Suspension CAD.png'),
      alt: "SolidWorks assembly CAD model I created of the rear suspension",
      modalSrc: require('../images/Rear Suspension CAD.png'),
      caption: "SolidWorks assembly CAD model I created of the rear suspension",
      className: "rear-suspension-cad-image"
    },
    {
      src: require('../images/Rear Suspension Stress.png'),
      alt: "Ansys Structural simulation of the maximum stress the trailing arm will experience",
      modalSrc: require('../images/Rear Suspension Stress.png'),
      caption: "Ansys Structural simulation of the maximum stress the trailing arm will experience"
    },
    {
      src: require('../images/Rear Suspension Fixture CAM.png'),
      alt: "Fusion360 CAM model I created to create the weld fixtures",
      modalSrc: require('../images/Rear Suspension Fixture CAM.png'),
      caption: "Fusion360 CAM model I created to create the weld fixtures"
    },
    {
      src: require('../images/Welding the Trailing Arm.jpeg'),
      alt: "TIG welding the trailing arm",
      modalSrc: require('../images/Welding the Trailing Arm.jpeg'),
      caption: "TIG welding the trailing arm"
    },
    {
      src: require('../images/Trailing Arm with Motor.jpeg'),
      alt: "Trailing arm and motor mounted to the chassis",
      modalSrc: require('../images/Trailing Arm with Motor.jpeg'),
      caption: "Trailing arm and motor mounted to the chassis"
    },
  ];
 
  return (
    <div className="project-detail-page">
             <div className="project-detail-header">
         <Link to="/projects" className="back-button">← Back to Projects</Link>
         <h1>ASU Solar Car Rear Suspension</h1>
         <p className="project-subtitle">My senior mechanical design project catered to Arizona State University's solar car racing team</p>
         <ImageCarousel 
           images={carouselImages} 
           onImageClick={openModal}
         />
       </div>

      <div className="project-detail-content">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            I proposed this project during my fall semester in my senior year of my bachelor's degree. Going into the year, as the mechanical lead of
            university's solar car team, I knew that the car still desperately needed to start design and fabrication of our rear suspension. I decided to
            enlist the help of some fellow classmates to help me with the development of this system. Because of my familiarity with the solar car
            and the existing challenges of implementing the design, I led the project and was heavily involved in the CAD modeling, finite element analysis, and fabrication
            of the system. It was important for this system to comply with American Solar Challenge regulations, as well as criterias that were set in place by the solar car team.
            The selected design was a trailing arm with a raised shock absorber mounting point to close distance between the trailing arm and
            chassis whilst also utilizing the most stiff points of the chassis. Welded together with chromoly steel tubing and machined components, the suspension complied with
            the competition loading conditions, was compatible with existing solar car systems, and also was optimized for strength, weight, and manufacturability.
          </p>
        </div>

        <div className="detail-section">
          <h3>Key Features</h3>
          <ul>
            <li>Withstands 2G bump, 1G turn, and 1G brake loading conditions simulataneously with a FOS of 1.5</li>
            <li>Compatible with team chassis and electric in-hub motor</li>
            <li>Allows for optimal wheel travel while remaining stiff enough to avoid bottoming out</li>
            <li>Has mounting space for future wheelwell cover</li>
          </ul>
        </div>

        <div className="project-details">
          <div className="side-by-side-container">
            <div className="detail-section process-section">
              <h3>Process</h3>
              <ul>
                <li>Understood the problem statement, requirements, and constraints</li>
                <li>Benchmarked with existing solutions to base the custom design</li>
                <li>Brainstormed different configurations and narrowed them down using a decision matrix</li>
                <li>Conducted static hand calculations on final designs to inform FEA boundary conditions</li>
                <li>Created a preliminary CAD model in SolidWorks to iterate and optimize in FEA</li>
                <li>Validated model in Ansys and adjusted for manufacturability</li>
                <li>Constructed weld fixtures in CAD and fabricated using a CNC router</li>
                <li>Welded trailing arm components together within weld fixture</li>
                <li>Assembled and installed system on solar car chassis</li>
                <li>Tested performance in both static and dynamic environments</li>
              </ul>
            </div>

            <div className="detail-section tools-section">
              <h3>Tools/Technologies Used</h3>
              <ul>
                <li>SolidWorks</li>
                <li>Fusion 360</li>
                <li>Ansys Mechanical</li>
                <li>Weld Fixtures</li>
                <li>Angle Grinders</li>
                <li>TIG Welding</li>
                <li>CNC Router</li>
                <li>CNC Mill</li>
                <li>Lathe</li>
                <li>3D Printing</li>
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h3>Skills Demonstrated</h3>
            <div className="skills-grid">
              <span className="skill-tag">Team Leadership</span>
              <span className="skill-tag">Mechanical Design</span>
              <span className="skill-tag">Finite Element Analysis</span>
              <span className="skill-tag">3D Modeling and Printing</span>
              <span className="skill-tag">Metal Fabrication</span>
              <span className="skill-tag">Design for Manufacturing</span>
              <span className="skill-tag">Design for Assembly</span>
              <span className="skill-tag">Project Management</span>
              <span className="skill-tag">Prototyping</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Outcomes and Results</h3>
            <p>
            By installing a working raised trailing arm suspension onto the solar car, I successfully created a mechanical 
            system that exemplified my ability to:
            </p>
            <ul>
              <li>Formulate design objectives, constraints, functions, and metrics</li>
              <li>Create and evaluate design concept alternatives</li>
              <li>Manage a design project scope, schedule, and budget</li>
              <li>Construct, test, and deliver a proof-of-concept prototype</li>
            </ul>
            <p>
            In my master's year, I plan to continue dynamic testing as the aeroshell of the car gets built and possibly incorporate
            a fatigue test analyis to see if the design has infinite life.
            </p>
          </div>

          <div className="detail-section">
            <h3>Reflection</h3>
            <p>
              Reflecting on this project, I am very proud of the work that was accomplished. This was one of the first projects I completed that I was able to execute the
              the entire mechanical design process from start to finish, building off the skills and knowledge I had gained throughout my degree.
              Even better, the project was related to something I was extremely passionate about, making it easy to give 110% of my effort. 
              I realized what I was truly capable of as an incoming mechanical engineer to the industry - to be able to provide working solutions, especially in the automotive industry.
              I hope to translate the skills demonstrated in this project to a career in building an optimistic future for human transportation.
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

export default ASUSolarCarSuspension;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import ImageCarousel from '../components/ImageCarousel';
import './Projects.css';

function ASUSolarCarWeldingTable() {
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
      src: require('../images/Finished Welding Table.jpeg'),
      alt: "The finished welding table",
      modalSrc: require('../images/Finished Welding Table.jpeg'),
      caption: "The finished welding table",
      className: "finished-welding-table-image"
    },
    {
      src: require('../images/Welding Table CAD and CAM.png'),
      alt: "Fusion360 CAM model I created to make the tool path for the center drill",
      modalSrc: require('../images/Welding Table CAD and CAM.png'),
      caption: "Fusion360 CAM model I created to make the tool path for the center drill"
    },
    {
      src: require('../images/Center Drilling.jpg'),
      alt: "Center drilling the surface with a CNC router",
      modalSrc: require('../images/Center Drilling.jpg'),
      caption: "Center drilling the surface with a CNC router"
    },
    {
      src: require('../images/Center Drilled Surface.jpeg'),
      alt: "Center drilled holes on the surface",
      modalSrc: require('../images/Center Drilled Surface.jpeg'),
      caption: "Center drilled holes on the surface"
    },
    {
      src: require('../images/Me Drilling the Table.jpeg'),
      alt: "Using a magnetic drill press to make the center drilled holes standard size thru holes",
      modalSrc: require('../images/Me Drilling the Table.jpeg'),
      caption: "Using a magnetic drill press to make the center drilled holes standard size thru holes"
    },
    {
      src: require('../images/Me Drilling the Table.jpeg'),
      alt: "Using a magnetic drill press to make the center drilled holes standard size thru holes",
      modalSrc: require('../images/Me Drilling the Table.jpeg'),
      caption: "Using a magnetic drill press to make the center drilled holes standard size thru holes"
    },
    {
      src: require('../images/Drilling in Progress.jpeg'),
      alt: "Mag-drilling in progress",
      modalSrc: require('../images/Drilling in Progress.jpeg'),
      caption: "Mag-drilling in progress"
    },
  ];

  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <Link to="/projects" className="back-button">← Back to Projects</Link>
        <h1>Mach One Solutions Welding Table</h1>
        <p className="project-subtitle">What started it all; a basic weld fixturing table for the solar car</p>
        
        <ImageCarousel 
          images={carouselImages}
          onImageClick={openModal}
        />
      </div>

      <div className="project-detail-content">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            Before we could start making the chassis, we needed a surface that we could fixture to during the welding process. To do this, the team and I designed and built a basic welding table. 
            Essentially a modified workbench, we fastened a large plate of mild steeland square tube stand-offs to convert the bench to a usuable weld fixture table. The plate of mild steel was
            manually drilled into over 600 times by the team with a magnetic drill press to make holes for fixturing components. Each drilled hole had a pilot hole made by a center drill on a CNC
            router. Without making this first, there would be no solar car. 
          </p>
        </div>

        <div className="detail-section">
            <h3>Key Features</h3>
            <ul>
                <li>Standardized fixture table hole pattern</li>
                <li>Steel surface to maintain conductance</li>
                <li>Convertible back to a normal workbench</li>
                <li>Easily movable on wheels</li>
              </ul>
          </div>

        <div className="project-details">
          <div className="side-by-side-container">
            <div className="detail-section process-section">
              <h3>Design Process</h3>
              <ul>
                <li>Measured the dimensions of the existing workbench surface</li>
                <li>Created a CAD model of the welding table surface plate with standardized hole pattern</li>
                <li>Generated a CAM toolpath for CNC router center drilling operation</li>
                <li>Drilled fixturing holes after pilot holes were routed</li>
                <li>Welded square tube standoffs to bottom of plate</li>
                <li>Fastened to existing workbench</li>
              </ul>
            </div>

            <div className="detail-section tools-section">
              <h3>Tools/Technologies Used</h3>
              <ul>
                <li>SolidWorks</li>
                <li>Fusion 360</li>
                <li>Angle Grinders</li>
                <li>Magnetic Drill Press</li>
                <li>CNC Router</li>
                <li>TIG Welding</li>
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h3>Skills Demonstrated</h3>
            <div className="skills-grid">
              <span className="skill-tag">Welding</span>
              <span className="skill-tag">Fixturing</span>
              <span className="skill-tag">Mechanical Design</span>
              <span className="skill-tag">Fabrication</span>
              <span className="skill-tag">CAD Modeling</span>
              <span className="skill-tag">Precision Assembly</span>
              <span className="skill-tag">SolidWorks</span>
              <span className="skill-tag">Manufacturing</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Outcomes and Results</h3>
            <ul>
              The completion of this small project was a big one for the team, as it was the first hands on endeavor we took and a big step towards starting fabrication of our chassis. The table worked greatly
              for locating fixures akin to the CAD assemblies.The project gave us some foundational skills that we ended up also utilizing during the chassis making process. Due to the fact that we drilled the 
              fixture holes manually there was a slight variation on hole placement throughout the welding table. Because of this, we have plans to create a Welding Table V2, that is modular, laser-cut/water 
              jetted, and then tapped to ease fixturing challenges. Fabricating it with this method should give us some added precision to future fixture weldments. 
            </ul>
          </div>

          <div className="detail-section">
            <h3>Reflection</h3>
            <p>
              This project to me was a perfect preview of what was to come for the solar car. It was hard work and tedious work, drilling over 600 holes straight on the steel plate but the necessity of the table
              made us push through. The same ideology applied for all future systems regarding the solar car, especially due to the custom nature of it. This project reinforced my understanding of design items for
              fabrication, and thinking ahead of what manufacturing processes will be used to make parts that I designed. It was also cool to be introduced to the concepts of making toolpaths in CAM, even in this
              simple application. It highlighted the importance of understanding the stock material, the machining order of operations, and ways to optimize manufacturing speed. The experience gained from this 
              project has been invaluable in subsequent engineering endeavors.
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

export default ASUSolarCarWeldingTable;

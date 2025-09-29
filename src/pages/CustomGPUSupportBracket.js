import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import ImageCarousel from '../components/ImageCarousel';
import './Projects.css';

function CustomGPUSupportBracket() {
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
      src: require('../images/GPU Getting Support.jpeg'),
      alt: "Finished GPU support bracket installed in PC case and supporting the GPU (kinda dusty, I know)",
      modalSrc: require('../images/GPU Getting Support.jpeg'),
      caption: "Finished GPU support bracket installed in PC case and supporting the GPU (kinda dusty, I know)",
      className: "gpu-getting-support-image",
    },
    {
      src: require('../images/GPU Support Bracket CAD.png'),
      alt: "SolidWorks CAD assembly model of the GPU support bracket design",
      modalSrc: require('../images/GPU Support Bracket CAD.png'),
      caption: "SolidWorks CAD assembly model of the GPU support bracket design",
    },
    {
      src: require('../images/GPU Support Bracket Real.jpeg'),
      alt: "GPU support bracket outside of the PC case",
      modalSrc: require('../images/Reactor Soldering Job.jpeg'),
      caption: "GPU support bracket outside of the PC case",
    },
  ];

  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <Link to="/projects" className="back-button">← Back to Projects</Link>
        <h1>Custom GPU Support Bracket</h1>
        <p className="project-subtitle">A custom-designed and fabricated support bracket to prevent GPU sag</p>
        
        <ImageCarousel 
          images={carouselImages}
          onImageClick={openModal}
        />
      </div>

      <div className="project-detail-content">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            I built a new PC recently with one of the new air-cooled RTX NVIDIA cards from MSI. These cards are known for their large size, as the GPU comes with a GPU support bracket that is supposed to help prevent the GPU from  
            sagging/deflecting excessively when installed. However, there was a fatal design problem with the included support bracket, as it was not able to fit in the lower PCIe slots. Because I wanted to use these lower slots, I decided to make
            my own. My improved design retains the magnetic bottom of the original, but instead opts for a screw-in support vs. one that is clipped. This allows for more refined and easier adjustment on the fly. I iterated
            on the fitment of this design quickly using 3D printing to ensure the threads interfaced properly. I glued foam to the support top to help soften the support surface and minimize scratching.
          </p>
        </div>

        <div className="detail-section">
          <h2>Key Features</h2>
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
              <h2>Design Process</h2>
              <ul>
                <li>Measured GPU dimensions, case clearance, and required distance to bridge</li>
                <li>Created support bracket assembly in SolidWorks</li>
                <li>Prototyped and iterated on design using 3D printing to check fitment</li>
                <li>Glued magnet and foam features to optimize installation</li>
                <li>Installed support bracket in PC case</li>
              </ul>
            </div>

            <div className="detail-section tools-section">
              <h2>Tools/Technologies Used</h2>
              <ul>
                <li>SolidWorks</li>
                <li>3D Printing</li>
                <li>Adhesives</li>
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h2>Skills Demonstrated</h2>
            <div className="skills-grid">
              <span className="skill-tag">CAD</span>
              <span className="skill-tag">Design for Manufacturing</span>
              <span className="skill-tag">Rapid Prototyping</span>
            </div>
          </div>

          <div className="detail-section">
            <h2>Outcome and Results</h2>
            <p>
              The custom GPU support bracket was able to successfully eliminate GPU sag, removing excess stress on the PCIe slot. The 3D printed assembly was more than enough to support the GPU and keeping it
              perpendicular to the motherboard. It's threaded design is an improvement over the old one, as it allows for the active adjustment of the support height without having to remove it from the case.
              The magnet on the bottom ensures that if the case is moved or bumped that it won't displace the support.
            </p>
          </div>

          <div className="detail-section">
            <h2>Reflection</h2>
            <p>
              It's little projects like these that I love to seek out because it allows me to exercise my desire to continually improve existing designs. I'm always looking for ways to apply my engineering skills
              to make life a little bit easier, and this project was a great example of that. I recognized a product that I used that needed to be improved, and I was able to modify the design to meet my needs. 
              Additionally, this project continues to increase my fascination with the power of 3D printing. Without thi technology, the speed in which I made this part just would not have been possible. 
              3D printing to me is the clear future of engineering and manufacturing at a rapid pace. I am looking forward to the next time I am able to exercise these skills in my every day life.
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

export default CustomGPUSupportBracket;

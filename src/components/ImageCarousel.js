import React, { useState } from 'react';
import './ImageCarousel.css';

function ImageCarousel({ images, onImageClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImage = images[currentImageIndex];

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        <button 
          className="carousel-arrow carousel-arrow-left" 
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          &#8249;
        </button>
        
        <div className="carousel-image-container">
          {currentImage.type === 'video' ? (
            <video 
              className={`carousel-video ${currentImage.className || ''}`}
              src={currentImage.src}
              poster={currentImage.poster}
              muted
              loop
              playsInline
              onClick={() => onImageClick(currentImage.modalSrc || currentImage.src, currentImage.alt, currentImage.caption, 'video')}
            />
          ) : (
            <img 
              src={currentImage.src} 
              alt={currentImage.alt} 
              className={`carousel-image ${currentImage.className || ''}`}
              onClick={() => onImageClick(currentImage.modalSrc || currentImage.src, currentImage.alt, currentImage.caption, 'image')}
            />
          )}
        </div>
        
        <button 
          className="carousel-arrow carousel-arrow-right" 
          onClick={goToNext}
          aria-label="Next image"
        >
          &#8250;
        </button>
      </div>
      
      <div className="carousel-caption">
        Image {currentImageIndex + 1} of {images.length}
      </div>
    </div>
  );
}

export default ImageCarousel;

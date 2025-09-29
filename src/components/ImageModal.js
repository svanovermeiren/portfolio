import React from 'react';
import './ImageModal.css';

function ImageModal({ isOpen, imageSrc, imageAlt, imageCaption, mediaType = 'image', onClose }) {
  if (!isOpen) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          ×
        </button>
        {mediaType === 'video' ? (
          <video 
            className="modal-image" 
            src={imageSrc} 
            controls 
            autoPlay 
            muted 
            playsInline
          />
        ) : (
          <img src={imageSrc} alt={imageAlt} className="modal-image" />
        )}
        <div className="modal-caption">{imageCaption || imageAlt}</div>
      </div>
    </div>
  );
}

export default ImageModal;

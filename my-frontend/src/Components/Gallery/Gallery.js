import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const images = [
  '/Gallery/media/img1.jpeg',
  '/Gallery/media/img2.png',
  '/Gallery/media/img3.jpg',
  '/Gallery/media/img5.jpg',  // Add more images as needed
];

function Gallery() {
  return (
    <div className="gallery">
      {images.map((src, index) => (
        <motion.div
          key={index}
          className="gallery-item"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <img src={src} alt={`Gallery ${index + 1}`} />
        </motion.div>
      ))}
    </div>
  );
}

export default Gallery;

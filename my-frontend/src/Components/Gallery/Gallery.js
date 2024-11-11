import { motion } from 'framer-motion';
import React from 'react';
import './Gallery.css';

const images = [
  'https://sjc1.vultrobjects.com/kunalverma336915/gallery/img1.jpeg',
  'https://sjc1.vultrobjects.com/kunalverma336915/gallery/img2.png',
  'https://sjc1.vultrobjects.com/kunalverma336915/gallery/img3.jpg',
  'https://sjc1.vultrobjects.com/kunalverma336915/gallery/img5.jpg'
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

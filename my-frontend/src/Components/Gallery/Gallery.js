import { motion } from 'framer-motion';
import React from 'react';
import './Gallery.css';

// Importing images correctly using relative paths
import img1 from './media/img1.jpeg';
import img2 from './media/img2.png';
import img3 from './media/img3.jpg';
import img5 from './media/img5.jpg';

const images = [img1, img2, img3, img5];

const Gallery = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="gallery">
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
});

export default Gallery;

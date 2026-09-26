import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm <br/>
            <span className="text-gradient">Utsav Thummar</span>
          </motion.h1>
          
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Software Engineer <span className="separator">/</span> Full Stack Developer
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <a href="#projects" className="btn">
              View My Work <span className="arrow">→</span>
            </a>
            <a href="https://github.com/Utsav1209" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{marginLeft: '1rem'}}>
              GitHub <span className="arrow">↗</span>
            </a>
            <a href="/Utsav_Senior_CV.pdf" download="Utsav_Thummar_Senior_CV.pdf" className="btn btn-outline" style={{marginLeft: '1rem'}}>
              Resume <span className="arrow">↓</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ y, perspective: 1000 }}
        >
          <motion.div 
            className="hero-image-container glass-panel"
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img src="/profile_enhanced.png" alt="Utsav Thummar" className="hero-image" />
            <div className="image-glow"></div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        style={{ opacity }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div 
          className="contact-wrapper glass-panel"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-content">
            <h2 className="section-title">Let's build something <span className="text-gradient">amazing</span></h2>
            <p className="contact-subtitle">
              I am currently open to new opportunities and exciting engineering challenges. Whether you have a question, a potential project, or simply wish to connect, I would be delighted to hear from you.
            </p>
            
            <div className="contact-actions">
              <a href="mailto:utsavthummar12@gmail.com" className="btn btn-primary">
                Say Hello <span className="arrow">→</span>
              </a>
            </div>

            <div className="contact-links">
              <a href="mailto:utsavthummar12@gmail.com" className="social-link">
                <span className="social-icon">✉</span> utsavthummar12@gmail.com
              </a>
              <a href="https://linkedin.com/in/utsavthummar" target="_blank" rel="noreferrer" className="social-link">
                <span className="social-icon">in</span> linkedin.com/in/utsavthummar
              </a>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

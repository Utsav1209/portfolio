import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div 
          className="contact-box glass-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Get In Touch</h2>
          <p className="contact-subtitle">
            I am currently open to new opportunities and exciting engineering challenges. Whether you have a question, a potential project, or simply wish to connect, I would be delighted to hear from you.
          </p>
          <div className="contact-info">
            <a href="mailto:utsavthummar12@gmail.com" className="contact-link">
              <span className="icon">✉</span> utsavthummar12@gmail.com
            </a>
            <a href="https://linkedin.com/in/utsavthummar" target="_blank" rel="noreferrer" className="contact-link">
              <span className="icon">in</span> linkedin.com/in/utsavthummar
            </a>
            <a href="tel:+916352627063" className="contact-link">
              <span className="icon">☎</span> +91 6352627063
            </a>
          </div>
          <a href="mailto:utsavthummar12@gmail.com" className="btn">Say Hello</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

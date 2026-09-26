import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '✦',
      title: 'Full-Stack Development',
      description: 'End-to-end development of custom web applications. From responsive user interfaces to robust server-side logic and database architecture.',
      color: 'var(--accent-blue)'
    },
    {
      id: 2,
      icon: '⟡',
      title: 'API & Backend Architecture',
      description: 'Designing secure, scalable RESTful APIs and microservices. Expertise in optimizing databases and server performance using Node.js and PHP.',
      color: 'var(--accent-cyan)'
    },
    {
      id: 3,
      icon: '✺',
      title: 'AI-Assisted & Vibe Coding',
      description: 'Leveraging cutting-edge AI tools to accelerate development cycles, rapidly prototype ideas, and architect smarter, more dynamic solutions.',
      color: 'var(--accent-violet)'
    },
    {
      id: 4,
      icon: '✧',
      title: 'Modern Frontend & PWAs',
      description: 'Translating designs into pixel-perfect experiences using Angular, React, or Vue.js, and building fast, cross-platform Progressive Web Apps.',
      color: 'var(--accent-yellow)'
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Technical <span className="text-gradient">Services</span></h2>
        </motion.div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              className="service-card glass-panel"
              initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="service-icon-wrapper" 
                style={{ color: service.color }}
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Full-Stack Development',
      description: 'End-to-end development of custom web applications. From responsive user interfaces to robust server-side logic and database architecture.'
    },
    {
      id: 2,
      icon: '⚙️',
      title: 'API & Backend Architecture',
      description: 'Designing secure, scalable RESTful APIs and microservices. Expertise in optimizing databases and server performance using Node.js and PHP.'
    },
    {
      id: 3,
      icon: '🤖',
      title: 'AI-Assisted & Vibe Coding',
      description: 'Leveraging cutting-edge AI tools to accelerate development cycles, rapidly prototype ideas, and architect smarter, more dynamic solutions.'
    },
    {
      id: 4,
      icon: '📱',
      title: 'Modern Frontend & PWAs',
      description: 'Translating designs into pixel-perfect experiences using Angular, React, or Vue.js, and building fast, cross-platform Progressive Web Apps.'
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              className="service-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="service-icon">{service.icon}</div>
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

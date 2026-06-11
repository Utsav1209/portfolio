import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const skills = [
    'JavaScript', 'Angular', 'Vue.js', 'Nuxt.js', 'Node.js', 
    'PHP', 'MySQL', 'HTML', 'CSS', 'Ionic Capacitor', 'PWA', 'AWS', 'Serverless Framework',
    'AI Assisted Coding', 'Vibe Coding'
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="about-content">
          <motion.div 
            className="about-text glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I am an experienced <strong>Software Engineer</strong> specializing in designing and developing robust web applications and distributed systems. Throughout my career, I have demonstrated a strong proficiency in architecting modular solutions and implementing secure, scalable backend services.
            </p>
            <p>
              Collaborating within cross-functional teams, I focus on delivering high-quality products that meet rigorous performance and usability standards. My technical expertise spans modern frontend frameworks, including Angular and Vue.js, as well as comprehensive server-side development utilizing Node.js and PHP. I am highly capable of quickly diagnosing complex issues, optimizing databases, and integrating sophisticated APIs to ensure seamless user experiences.
            </p>
          </motion.div>
          <motion.div 
            className="about-skills glass-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Technical Expertise</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.span 
                  key={skill} 
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

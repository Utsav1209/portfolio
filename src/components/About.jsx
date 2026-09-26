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
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
        </motion.div>
        
        <div className="about-layout">
          <motion.div 
            className="about-bio"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="lead-text">
              I am an experienced <strong>Software Engineer</strong> specializing in designing and developing robust web applications and distributed systems. Throughout my career, I have demonstrated a strong proficiency in architecting modular solutions and implementing secure, scalable backend services.
            </p>
            <p className="body-text">
              Collaborating within cross-functional teams, I focus on delivering high-quality products that meet rigorous performance and usability standards. My technical expertise spans modern frontend frameworks, including Angular and Vue.js, as well as comprehensive server-side development utilizing Node.js and PHP. I am highly capable of quickly diagnosing complex issues, optimizing databases, and integrating sophisticated APIs to ensure seamless user experiences.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-skills glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="skills-title">Technical Expertise</h3>
            <div className="skills-cloud">
              {skills.map((skill, index) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'US Legal Services',
      role: 'Full Stack Developer @ Wings Tech Solutions',
      date: 'March 2024 - Present',
      tech: ['PHP', 'Angular', 'MySQL', 'Vue.js', 'Nuxt.js', 'Node.js'],
      description: 'Architected and developed a comprehensive legal case and subscription management platform. This system handles complex legal plans, intricate attorney network integrations, and multi-stakeholder service workflows. Engineered RESTful APIs, optimized MySQL schemas for real-time data management, and implemented secure server-side validation.',
    },
    {
      id: 2,
      title: 'Machine Learning Annotation Tool',
      role: 'Software Developer @ NacstergenAI',
      date: 'October 2022 - March 2024',
      tech: ['HTML', 'CSS', 'Angular', 'OpenCV'],
      description: 'Developed high-performance software applications deployed across distributed systems. Engineered advanced annotation and validation interfaces for machine learning workflows utilizing OpenCV, ensuring high-fidelity data processing and delivering professional-grade solutions for complex AI training models.',
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="project-card glass-panel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <p className="project-role">{project.role}</p>
                  <p className="project-date">{project.date}</p>
                </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

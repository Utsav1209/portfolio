import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'US Legal Services',
      role: 'Full Stack Developer @ Wings Tech Solutions',
      date: 'March 2024 - Present',
      tech: ['PHP', 'Angular', 'MySQL', 'Vue.js', 'Nuxt.js', 'Node.js', 'AWS Microservices', 'ADA Accessibility'],
      description: 'Architected and developed a comprehensive legal case and subscription management platform. This system handles complex legal plans, intricate attorney network integrations, and multi-stakeholder service workflows. Engineered RESTful APIs, optimized MySQL schemas for real-time data management, and implemented secure server-side validation.',
      color: 'var(--accent-blue)',
      gradient: 'var(--gradient-primary)'
    },
    {
      id: 2,
      title: 'Machine Learning Annotation Tool',
      role: 'Software Developer @ NacstergenAI',
      date: 'October 2022 - March 2024',
      tech: ['HTML', 'CSS', 'Angular', 'OpenCV'],
      description: 'Developed high-performance software applications deployed across distributed systems. Engineered advanced annotation and validation interfaces for machine learning workflows utilizing OpenCV, ensuring high-fidelity data processing and delivering professional-grade solutions for complex AI training models.',
      color: 'var(--accent-violet)',
      gradient: 'var(--gradient-cool)'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Selected <span className="text-gradient">Experience</span></h2>
          <p className="section-subtitle">Professional work and architectural achievements.</p>
        </motion.div>

        <div className="projects-showcase">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div 
      className="project-row"
      initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      <div className="project-visual">
        <motion.div 
          className="project-placeholder" 
          style={{ background: project.gradient, y }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className="project-number">0{index + 1}</div>
          <div className="visual-overlay"></div>
        </motion.div>
      </div>
      
      <div className="project-info">
        <div className="project-meta">
          <span className="project-role" style={{ color: project.color }}>{project.role}</span>
          <span className="project-date">{project.date}</span>
        </div>
        
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        
        <div className="project-tech">
          {project.tech.map((t, i) => (
            <motion.span 
              key={t} 
              className="tech-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.05) }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <p className="copyright">&copy; {new Date().getFullYear()} Utsav Thummar. Crafted with precision.</p>
          <div className="footer-links">
            <a href="https://github.com/Utsav1209" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/utsavthummar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

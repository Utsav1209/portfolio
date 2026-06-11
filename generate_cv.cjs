const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50, size: 'A4' });
doc.pipe(fs.createWriteStream('public/Utsav_Senior_CV.pdf'));

// Header
doc.font('Helvetica-Bold').fontSize(26).text('Utsav Thummar', { align: 'center' });
doc.font('Helvetica').fontSize(14).fillColor('#4f46e5').text('Senior Software Engineer | Full-Stack Developer', { align: 'center' });
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(10).fillColor('#666666').text('Rajkot | utsavthummar12@gmail.com | +91 6352627063 | linkedin.com/in/utsavthummar', { align: 'center' });

doc.moveDown(1.5);

function addSection(title) {
  doc.font('Helvetica-Bold').fontSize(14).fillColor('#111111').text(title);
  doc.moveTo(50, doc.y + 2).lineTo(545, doc.y + 2).strokeColor('#e5e7eb').lineWidth(1).stroke();
  doc.moveDown(0.5);
}

// Summary
addSection('Professional Summary');
doc.font('Helvetica').fontSize(10).fillColor('#333333').text(
  'Results-driven Senior Software Engineer with a proven track record of architecting, developing, and deploying high-performance web applications and distributed systems. Adept at driving the complete software development lifecycle, from conceptualization to production. Demonstrated expertise in modern JavaScript frameworks (Angular, Vue.js, React) and robust backend architectures (Node.js, PHP). Passionate about optimizing system scalability, establishing engineering best practices, and mentoring cross-functional teams to deliver exceptional digital products.',
  { align: 'justify', lineGap: 3 }
);
doc.moveDown(1);

// Core Competencies
addSection('Core Competencies');
doc.font('Helvetica-Bold').fontSize(10).text('Frontend Architecture: ', { continued: true }).font('Helvetica').text('JavaScript (ES6+), Angular, Vue.js, Nuxt.js, React, HTML5/CSS3', { lineGap: 3 });
doc.font('Helvetica-Bold').fontSize(10).text('Backend & APIs: ', { continued: true }).font('Helvetica').text('Node.js, PHP, RESTful API Design, Microservices architecture', { lineGap: 3 });
doc.font('Helvetica-Bold').fontSize(10).text('Mobile & Progressive Web: ', { continued: true }).font('Helvetica').text('Ionic Capacitor, PWA (Progressive Web Apps)', { lineGap: 3 });
doc.font('Helvetica-Bold').fontSize(10).text('Databases & Cloud: ', { continued: true }).font('Helvetica').text('MySQL, Database Optimization, AWS (S3, EC2), Serverless Framework', { lineGap: 3 });
doc.font('Helvetica-Bold').fontSize(10).text('Tools & Practices: ', { continued: true }).font('Helvetica').text('Git, Postman, OpenCV, Agile/Scrum, State Management, CI/CD', { lineGap: 3 });
doc.moveDown(1);

// Experience
addSection('Professional Experience');

function addJob(company, title, dates) {
  doc.font('Helvetica-Bold').fontSize(12).fillColor('#111111').text(company);
  doc.font('Helvetica-Oblique').fontSize(10).fillColor('#666666').text(title, { continued: true });
  doc.text(' | ' + dates, { align: 'right' });
  doc.moveDown(0.3);
}

function addBullet(text) {
  doc.rect(55, doc.y + 3, 3, 3).fill('#4f46e5');
  doc.font('Helvetica').fontSize(10).fillColor('#333333').text(text, 65, doc.y, { align: 'justify', lineGap: 2 });
  doc.x = 50; // Reset X
}

addJob('Wings Tech Solutions | Rajkot, Gujarat', 'Senior Software Engineer (US Legal Services)', 'March 2024 - Present');
addBullet('Architected and spearheaded the development of a comprehensive, multi-tenant legal case and subscription management platform serving thousands of active users.');
addBullet('Designed and maintained secure RESTful APIs to handle intricate legal plans, sophisticated billing cycles, and attorney network integrations utilizing PHP and Node.js.');
addBullet('Optimized complex MySQL queries and engineered scalable database schemas, resulting in a significant reduction in data retrieval latency.');
addBullet('Led the frontend architecture using Angular and Vue.js, building dynamic, highly responsive dashboards for administrative personnel and attorneys.');
addBullet('Implemented robust server-side validation, JWT-based authorization, and real-time data synchronization utilizing WebSockets to ensure platform security.');
addBullet('Leveraged Nuxt.js for server-side rendering (SSR), drastically improving SEO performance and initial load times for critical external-facing portals.');
doc.moveDown(1);

addJob('NacstergenAI Pvt Ltd | Bangalore, Karnataka', 'Software Developer', 'October 2022 - March 2024');
addBullet('Engineered high-performance software applications deployed across distributed systems utilizing modern web technologies including Angular.');
addBullet('Developed advanced data annotation and validation interfaces for machine learning workflows using OpenCV, ensuring high-fidelity data processing pipelines.');
addBullet('Collaborated closely with data science teams to deliver professional-grade, scalable solutions for complex AI training models.');
addBullet('Championed rigorous code quality standards and applied industry best practices in state management and modular application architecture.');
doc.moveDown(1);

addJob('PySpiders | Bangalore, Karnataka', 'Full Stack Developer Intern (Python)', 'June 2022 - February 2023');
addBullet('Relocated to Bangalore to complete a highly intensive Full Stack development program, demonstrating a strong commitment to continuous learning.');
addBullet('Developed and deployed end-to-end applications utilizing Python and modern web technologies, establishing foundational expertise in backend logic and UI design.');
doc.moveDown(1);

addSection('Education');
addJob('Gujarat Technological University (VVP Engineering College)', 'Bachelor of Engineering, Electrical Engineering', 'Completed July 2020');

doc.end();

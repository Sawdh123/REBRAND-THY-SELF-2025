import React from 'react';
import "./Projects.css";
import Header from "./../Header/Header.jsx";
import Footer from "./../Footer/Footer.jsx";

function Projects() {
  return (
    <div className='section-container'>
      <Header
        heading="My Projects."
        subHeading="Check out my latest work and contributions!"
      />
      
      <div className='projects-info-container'>
        <p>
          Explore my projects on <a href="https://github.com/Sawdh123" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
        
        <h2>Recent Projects</h2>
        <ul>
          <li>
            <strong>Alertify: Intelligent Event Detection System</strong> (QNX, C, AI/ML, IPC, GitHub) - A humanitarian initiative inspired by my last visit to the Middle East, aimed at enhancing safety and security in Aden, Yemen. 
            The system is designed to detect anomalies in sensor data (e.g., temperature, pressure, motion) in real-time while minimizing false positives. It leverages AI-driven anomaly detection optimized for QNX RTOS and integrates with Raspberry Pi 4 and multiple safety sensors. Our four-member team is actively developing this project, following a structured and efficient roadmap:
            <ul>
              <li><strong>Objective:</strong> Enable real-time monitoring of environmental factors, ensuring rapid differentiation between critical and non-critical anomalies to enhance safety and response times.</li>
              <li><strong>Hardware:</strong> Utilizing Raspberry Pi 4 as the primary processing unit, integrated with a variety of environmental and security sensors.</li>
              <li><strong>Data Collection:</strong> Implementing robust data collection techniques, preprocessing sensor data, handling missing values, and normalizing input for machine learning models.</li>
              <li><strong>Anomaly Detection:</strong> Employing advanced AI techniques, including unsupervised learning and deep learning models, to improve accuracy in detecting irregular patterns.</li>
              <li><strong>Use Cases:</strong> Applications span across smart kitchen automation, office security enhancement, and industrial safety monitoring.</li>
            </ul>
          </li>
          <li>
            <strong>FuelEase Aden</strong> (React.js, Express.js, MongoDB, AWS, Chart.js, GitHub) - A social impact-driven platform designed to alleviate fuel shortages in developing regions, specifically Aden, Yemen. The project was inspired by my firsthand experience witnessing the difficulties residents face in tracking fuel availability and fluctuating prices. FuelEase Aden provides a streamlined solution to enhance efficiency and accessibility in fuel procurement.
            <ul>
              <li><strong>Objective:</strong> Simplify the process of checking real-time fuel availability and price fluctuations, improving logistical planning and time management for individuals and businesses.</li>
              <li><strong>Technology Stack:</strong> A full-stack web application developed with React.js for the frontend, Express.js for the backend, and MongoDB for efficient data storage.</li>
              <li><strong>Data Integration:</strong> Fuel price and availability data are updated dynamically through user submissions and verified sources, ensuring accurate and up-to-date information.</li>
              <li><strong>AI-Driven Analytics:</strong> Incorporating AI-powered trend analysis to provide predictive insights on fuel price fluctuations and supply patterns.</li>
              <li><strong>Scalability & Accessibility:</strong> Engineered to function under low-bandwidth conditions (2G networks) to accommodate users in infrastructure-limited regions.</li>
            </ul>
          </li>
          <li>
            <strong>Neureset EEG Neurofeedback Simulation Platform</strong> (C++, Qt, UML, VirtualBox, GitHub) - A medical-grade EEG signal processing simulator.
          </li>
          <li>
            <strong>Elevator System Simulator</strong> (Qt C++, UML, Real-time Systems, GitHub) - A safety-certified real-time elevator control system with emergency stop functionality.
          </li>
        </ul>
      </div>
      
      <Footer
        phrase="Check out "
        link="my skills!"
        toAddress="/skills"
      />
    </div>
  );
}

export default Projects;

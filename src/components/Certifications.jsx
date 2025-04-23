// Certifications.js
import React from 'react';
import myc1react from '../assets/reactcerti.jpg';
import myc2nptel from '../assets/Nptelcloud.jpg';

// Sample certificate data with images
const certifications = [
  {
    id: 1,
    title: 'Industrial Training | ReactJs',
    issuer: 'Completed hands-on industrial training in ReactJS, focusing on building dynamic web applications using React Hooks, components, routing, and API integration. Developed a project showcasing real-time data handling and responsive UI.',
    date: 'May-Aug 2024',
    link: 'https://reactacademy.com/certificates/certified-react-developer',
    image: myc1react,
  },
  {
    id: 2,
    title: ' Cloud Computing – NPTEL',
    issuer: 'Successfully completed the NPTEL Cloud Computing course offered by IIT, covering fundamental and advanced concepts of cloud technologies. Gained hands-on experience with cloud models, virtualization, deployment models, and service types (IaaS, PaaS, SaaS).',
    date: 'Jul-Oct 2024',
    link: 'https://javascriptinstitute.org/certificates/javascript-developer',
    image: myc2nptel,
  },
];

const Certifications = () => {
  // Inline styles
  const styles = {
    certifications: {
      padding: '20px',
    },
    certificatesContainer: {
      display: 'flex',
      flexDirection: 'column', // Stack certificates vertically
      gap: '20px', // Space between certificates
    },
    certificate: {
      display: 'flex', // Align items side by side
      justifyContent: 'space-around', // Space between info and image
      border: '1px solid #ccc', // Optional: Add a border
      padding: '10px', // Optional: Add padding
      borderRadius: '5px', // Optional: Rounded corners
    },
    certificateInfo: {
      flex: 1, // Take up available space
    },
    certificateImage: {
      marginLeft: '20px', // Space between text and image
    },
    image: {
      width: '500px',
      height: '300px',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.certifications}>
      <h1 style={{ fontSize: '2.5em', fontWeight:'bolder' }}>Certifications</h1>
      <div style={styles.certificatesContainer}>
        {certifications.map(cert => (
          <div style={styles.certificate} key={cert.id}>
            <div style={styles.certificateInfo}>
              <h1>{cert.title}</h1>
              <p>{cert.issuer}</p>
              <p>Date: {cert.date}</p>
              
            </div>
            <div style={styles.certificateImage}>
              <img src={cert.image} alt={`${cert.title} certificate`} style={styles.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
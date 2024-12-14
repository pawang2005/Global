import React from 'react';
import './DeveloperProfile.css';

const DeveloperProfile = () => {
  const skills = [
    { name: 'React', icon: '⚛️', percentage: 92 },
    { name: 'Angular', icon: '🅰️', percentage: 87 },
    { name: 'PHP', icon: '🐘', percentage: 81 },
    { name: 'Vue', icon: '📗', percentage: 76 }
  ];

  const metrics = [
    { label: 'Productivity', value: 95 },
    { label: 'Project completion rate', value: 99 },
    { label: 'Reliability', value: 100 }
  ];

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image-container">
          <img
            src="https://img.freepik.com/free-photo/portrait-cute-young-brunette-student-holding-exercise-books-isolated-white-wall_231208-11488.jpg"
            alt="Developer profile"
            className="profile-image"
          />
        </div>
        <div className="profile-details">
          <h2 className="profile-name">Ms. Divya Jain</h2>
          <p className="profile-role">Front-End Developer</p>
          <div>
            <p className="specialization-label">Specialised in:</p>
            <div className="specialization-icons">
              <span className="tech-icon react">⚛️</span>
              <span className="tech-icon angular">A</span>
              <span className="tech-icon php">PHP</span>
            </div>
          </div>
          <p className="developer-description">
            Divya is a focused front-end developer, specializing in React.js, React Native, JavaScript,
            and TypeScript. Her portfolio includes various applications, showcasing adaptability across
            sectors from shopping to finance apps.
          </p>
          <div className="detail-group">
            <h3 className="detail-label">Years of Experience:</h3>
            <p className="detail-value">6</p>
          </div>
          <div className="detail-group">
            <h3 className="detail-label">Based in:</h3>
            <p className="detail-value">Bangalore, India</p>
          </div>
          <div className="detail-group">
            <h3 className="detail-label">Qualification:</h3>
            <p className="detail-value">IIT, Delhi</p>
          </div>
          <div className="skills-section">
            <h3 className="section-title">Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="metrics-section">
            <h3 className="metrics-title">Overall performance rating</h3>
            {metrics.map((metric, index) => (
              <div key={index} className="metric-item">
                <span className="metric-label">{metric.label}</span>
                <div className="metric-value-group">
                  <span className="metric-value">{metric.value}%</span>
                  <div className="metric-indicator" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
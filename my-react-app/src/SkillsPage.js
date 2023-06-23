import React from 'react';
import './Skills.css';
const SkillsPage = () => {
  return (
    <div className="skills-page">
      <h2>SKILLS</h2>
      <div className="skills">
        <div className="skill">
          <h3>HTML</h3>
          <p>Proficient in writing clean and semantic HTML code.</p>
        </div>
        <div className="skill">
          <h3>CSS</h3>
          <p>Experience in styling websites using CSS and CSS frameworks.</p>
        </div>
        <div className="skill">
          <h3>JavaScript</h3>
          <p>Strong understanding of core JavaScript concepts and ES6 features.</p>
        </div>
        <div className="skill">
          <h3>React</h3>
          <p>Expertise in building dynamic and interactive web applications with React.</p>
        </div>
        <div className="skill">
          <h3>Node.js</h3>
          <p>Familiarity with building server-side applications using Node.js and Express.</p>
        </div>
        <div className="skill">
          <h3>Database</h3>
          <p>Knowledge of working with databases such as MySQL and MongoDB.</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;

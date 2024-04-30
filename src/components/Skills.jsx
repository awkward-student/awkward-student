import React from "react";
import "../css/skills.css";

function Skills() {
  return (
    <section id="skills">
      <h2>What's under the hood?</h2>
      <p>The tools I use behind the scenes.</p>
      <div id="skills-div">
        <div className="skills-card-container">
          <div className="skill-card">JAVA</div>
          <div className="skill-card">SPRING</div>
          <div className="skill-card">SQL</div>
        </div>
        <div className="skills-card-container">
          <div className="skill-card">JAVA SCRIPT</div>
          <div className="skill-card">NODE</div>
          <div className="skill-card">NPM</div>
        </div>
        <div className="skills-card-container">
          <div className="skill-card">PYTHON</div>
          <div className="skill-card">REACT</div>
          <div className="skill-card">MONGO</div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

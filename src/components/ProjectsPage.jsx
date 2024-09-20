import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <section className="projects">
      <h1>My Projects</h1>
      <div className="project-gallery">
        <div className="project-card">
          <img src="./aalborgGade (3).png" alt="Aalborg Garden" /> 
          <p>Aalborg Garden</p>
          <Link to="/projects/aalborg-garden">View Project</Link>
        </div>
        <div className="project-card">
          <img src="./project1.png" alt="Magisk Jul i Skulpturparken" /> 
          <p>Magisk Jul i Skulpturparken</p>
          <Link to="/projects/magisk-jul">View Project</Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;

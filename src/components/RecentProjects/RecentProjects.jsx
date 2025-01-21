import React from 'react';
import './RecentProjects.css'; 
import project1 from "../../assets/images/project1.jfif"
import project2 from "../../assets/images/project2.jfif"
import project3 from "../../assets/images/project3.jfif"


const RecentProjects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of the project, highlighting key features.',
      image: project1,
      link: '#project1',
    },
    {
      title: 'Project Two',
      description: 'A brief description of the project, highlighting key features.',
      image: project2,
      link: '#project2',
    },
    {
      title: 'Project Three',
      description: 'A brief description of the project, highlighting key features.',
      image: project3,
      link: '#project3',
    },
  ];

  return (
<section className="recent-projects">
  <h2 className="recent-projects-title">Recent Projects</h2>
  <p className="recent-projects-subtitle">Take a look at some of our most recent successful projects.</p>
  <div className="projects-container">
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} className="project-link">Learn More</a>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default RecentProjects;

import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "ASU Solar Car Rear Suspension",
    description: "The crown jewel - my most sophisticated academic project taking form as my undergraduate capstone",
    image: require('../images/Me with the Trailing Arm.jpeg'),
    skills: ["CAD/CAM", "FEA", "DFM/DFA", "Mechanical Design", "Metal Fabrication", "TIG Welding", "Fixturing"],
    link: "/projects/solar-car-suspension"
  },
  {
    id: 2,
    title: "ASU Solar Car Mechanical Systems",
    description: "Other mechanical systems designed and fabricated from scratch for the ASU Solar Car",
    image: require('../images/Mechanical Systems.jpg'),
    skills: ["CAD/CAM", "FEA", "DFM/DFA", "Mechanical Design", "Metal Fabrication", "TIG Welding", "Fixturing", "Vehicle Dynamics"],
    link: "/projects/solar-car-mechanical-systems"
  },
  {
    id: 3,
    title: "Automated NFT Hydroponic System",
    description: "Created a hydroponic system that actively adjusts nutrient level and pH",
    image: require('../images/Hydroponic Final System.jpg'),
    skills: ["CAD", "Rapid Prototyping", "Circuit Design", "Arduino", "3D Printing"],
    link: "/projects/automated-nft-hydroponic-system"
  },
  {
    id: 4,
    title: "Mach One Solutions Welding Table",
    description: "What started it all - a basic weld fixturing table custom built for the solar car",
    image: require('../images/Finished Welding Table.jpeg'),
    skills: ["CAD/CAM", "CNC Routing", "Drilling", "Metal Fabrication"],
    link: "/projects/solar-car-welding-table"
  },
  {
    id: 5,
    title: "Finite Element Code Projects",
    description: "Class projects that involved creating custom FEM codes in MATLAB to predict thermal and elastic behaviors",
    image: require('../images/Finite Element Coding Projects.png'),
    skills: ["MATLAB", "FEA", "Finite Element Method", "Differential Equations", "Technical Writing"],
    link: "/projects/finite-element-coding-course-projects"
  },
  {
    id: 6,
    title: "3D Printed Arc Reactor",
    description: "A custom-designed and fabricated Halloween costume component showcasing the power of CAD and additive manufacturing",
    image: require('../images/Arc Reactor.jpeg'),
    skills: ["CAD", "Rapid Prototyping", "Circuit Design", "Soldering","3D Printing"],
    link: "/projects/3d-printed-arc-reactor"
  },
  {
    id: 7,
    title: "Safety Wire Bolt Drilling Fixture",
    description: "A fixture used to drill safety wire holes in bolts missing the hole",
    image: require('../images/Safety Wire Bolt Drilling Fixture CAD With Bolts Wide.png'),
    skills: ["CAD", "DFM", "Mechanical Design", "Drilling", "Hardware Assembly"],
    link: "/projects/safety-wire-bolt-drilling-fixture"
  },
  {
    id: 8,
    title: "AZGFD Aeration Project",
    description: "Laid the groundwork for an offgrid aeration system for a fish hatchery in Show Low, AZ",
    image: require('../images/AZGFD Hatchery.jpeg'),
    skills: ["Circuit Design", "Prototyping", "Project Management"],
    link: "/projects/aeration-project"
  },
  {
    id: 9,
    title: "Wind Energy Research Project",
    description: "Investigated the feasibility of vertical axis wind turbines supplementing horizontal axis turbines",
    image: require('../images/VAWT.jpg'),
    skills: ["MATLAB", "Graduate Research", "Renewable Energy"],
    link: "/projects/wind-energy"
  },
  {
    id: 10,
    title: "Custom GPU Support Bracket",
    description: "A custom-designed and fabricated support bracket to prevent GPU sag",
    image: require('../images/GPU Getting Support.jpeg'),
    skills: ["CAD", "DFM", "Rapid Prototyping", "3D Printing"],
    link: "/projects/custom-gpu-support-bracket"
  }
];

function ProjectCard({ project }) {
  const cardContent = (
    <>
      <div className="project-image">
        <img 
          src={project.image} 
          alt={project.title} 
          className={project.title === "ASU Solar Car Mechanical Systems" ? "mechanical-systems-card-image" : undefined}
        />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-skills">
          {project.skills.map((skill, index) => (
            <span key={index} className="skill-label">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (project.link) {
    return (
      <Link to={project.link} className="project-card-link">
        <div className="project-card clickable">
          {cardContent}
        </div>
      </Link>
    );
  }

  return (
    <div className="project-card">
      {cardContent}
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-page">
      <h1>My Projects - Click on the icon to learn more!</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects; 
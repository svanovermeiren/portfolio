import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const SHOW_EXPERIENCE = false;

  const buttons = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resume', path: '/resume' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact Me', path: '/contact' },
  ];

  const projects = [
    { label: 'ASU Solar Car Rear Suspension', path: '/projects/solar-car-suspension' },
    { label: 'ASU Solar Car Mechanical Systems', path: '/projects/solar-car-mechanical-systems' },
    { label: 'Automated NFT Hydroponic System', path: '/projects/automated-nft-hydroponic-system' },
    { label: 'Mach One Solutions Welding Table', path: '/projects/solar-car-welding-table' },
    { label: 'Finite Element Code Projects', path: '/projects/finite-element-coding-course-projects' },
    { label: '3D Printed Arc Reactor', path: '/projects/3d-printed-arc-reactor' },
    { label: 'Safety Wire Bolt Drilling Fixture', path: '/projects/safety-wire-bolt-drilling-fixture' },
    { label: 'AZGFD Aeration Project', path: '/projects/aeration-project' },
    { label: 'Wind Energy Research Project', path: '/projects/wind-energy' },
    { label: 'Custom GPU Support Bracket', path: '/projects/custom-gpu-support-bracket' },
  ];

  const handleProjectsMouseEnter = () => {
    setIsProjectsDropdownOpen(true);
  };

  const handleProjectsMouseLeave = () => {
    setIsProjectsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-name">Steven Van Overmeiren</span>
        <span className="navbar-title">Mechanical Engineering Portfolio</span>
      </div>
      <div className="navbar-right">
        {buttons.map(({ label, path }) => {
          if (!SHOW_EXPERIENCE && label === 'Experience') {
            return null;
          }
          if (label === 'Projects') {
            return (
              <div
                key={label}
                className="projects-dropdown-container"
                onMouseEnter={handleProjectsMouseEnter}
                onMouseLeave={handleProjectsMouseLeave}
              >
                <Link
                  to={path}
                  className={location.pathname === path || location.pathname.startsWith('/projects') ? 'active' : ''}
                >
                  {label}
                </Link>
                {isProjectsDropdownOpen && (
                  <div className="projects-dropdown">
                    {projects.map((project) => (
                      <Link
                        key={project.path}
                        to={project.path}
                        className="dropdown-item"
                      >
                        {project.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          return (
            <Link
              key={label}
              to={path}
              className={location.pathname === path ? 'active' : ''}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar; 
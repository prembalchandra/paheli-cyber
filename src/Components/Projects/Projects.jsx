import React, { useState } from 'react';
import './Projects.css';
import ProjectsImg1 from '../../assets/images/projects-1.jpg';
import ProjectsImg2 from '../../assets/images/projects-2.jpg';
import ProjectsImg3 from '../../assets/images/projects-3.jpg';
import ProjectsImg4 from '../../assets/images/projects-4.jpg';
import ProjectsImg5 from '../../assets/images/projectsimg.jpg';

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const projectsData = [
    { id: 1, title: 'Data Loss Prevention (DLP)', img: ProjectsImg1 },
    { id: 2, title: 'Cloud Security Solutions', img: ProjectsImg2 },
    { id: 3, title: 'Network Monitoring Tools', img: ProjectsImg3 },
    { id: 4, title: 'Endpoint Protection', img: ProjectsImg4 },
    { id: 5, title: 'Secure Authentication Systems', img: ProjectsImg5 },
  ];

  return (
    <React.Fragment>
      <section className="projects-area">
        <div className="srcn_container">
          <div className='testimonial_top-bxo'>
            <h2 className="section_title">Our Projects</h2>
            <p>Feat to Celebrate: Showcasing Some of Our Proud Projects.</p>
          </div>
          <div className="projects-box-info">
            <ul className="main-box">
              {projectsData.map((project, index) => (
                <li
                  key={project.id}
                  className={`box ${index === activeIndex || index === hoverIndex ? 'active' : ''}`}
                  style={{ width: '25%' }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(index)}
                >
                  <span>
                    <img src={project.img} alt={project.title} />
                  </span>
                  <div className="detail">
                    <div className="content">
                      <h3>
                        <a className="text-decoration-none" href="/service-details">
                          {project.title}
                        </a>
                      </h3>
                      <p>
                        This includes implementing strategies and tools to prevent sensitive data...
                      </p>
                      <a className="read-more text-decoration-none" href="/service-details">
                        Read More<i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Projects;

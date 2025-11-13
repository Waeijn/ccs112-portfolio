import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Task Manager Pro (MERN Stack)",
      description: "A full-stack application for tracking tasks with user authentication, built using MongoDB, Express, React, and Node.js.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
      link: "#",
    },
    {
      id: 2,
      title: "Real-time Chat App",
      description: "A real-time messaging application featuring WebSocket integration for instant communication.",
      tech: ["React", "Socket.io", "CSS"],
      link: "#",
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard visualizing public data sets using a charting library.",
      tech: ["Python (Pandas)", "Flask", "D3.js"],
      link: "#",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="display-4 mb-4 text-center">My Projects</h1>
      <p className="lead text-center mb-5 text-muted">A collection of technical work demonstrating various skills and technologies.</p>

      <div className="row g-4">
        {projectList.map((project) => (
          <div key={project.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="mt-auto">
                  <div className="mb-3">
                    {project.tech.map((t) => (
                      <span key={t} className="badge bg-secondary me-1 mb-1">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => {
  const GITHUB_USER = "Waeijn";

  const projectList = [
    {
      id: 1,
      title: "AuraTech",
      description: "A front-end focused project demonstrating modern UI/UX design principles and interactive web components.",
      tech: ["JavaScript", "HTML", "CSS", "Bootstrap"],
      link: `https://github.com/${GITHUB_USER}/AuraTech`,
      languageColor: "bg-warning", 
    },
    {
      id: 2,
      title: "FoodFiesta",
      description: "FoodFiesta - Savoring culinary delights with every click. A website focused on recipe display and structured content.",
      tech: ["HTML", "CSS", "Responsive Design"],
      link: `https://github.com/${GITHUB_USER}/FoodFiesta`,
      languageColor: "bg-danger", 
    },
    {
      id: 3,
      title: "CCS103-POS-System",
      description: "A robust Point-of-Sale (POS) system application, likely developed using Java and Object-Oriented Programming (OOP) principles.",
      tech: ["Java", "OOP", "Database Integration"],
      link: `https://github.com/${GITHUB_USER}/CCS103-POS-System`,
      languageColor: "bg-info", 
    },
    {
      id: 4,
      title: "Game Development Project",
      description: "A project demonstrating game logic and asset management, utilizing the Godot Engine and GDScript language.",
      tech: ["Godot", "GDScript", "GameMaker"],
      link: `https://github.com/${GITHUB_USER}/Godot-Game-Project`, 
      languageColor: "bg-success", 
    },
  ];

  return (
    <div className="container mt-5 pt-5">
      <h1 className="display-4 mb-4 text-center">My Projects</h1>
      <p className="lead text-center mb-5 text-muted">A collection of technical work covering full-stack, design, and game development.</p>

      <div className="row g-4">
        {projectList.map((project) => (
          <div key={project.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-lg border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                
                <div className="mt-auto pt-3">
                  <div className="mb-2">
                    {project.tech.map((t) => (
                      <span key={t} className="badge bg-secondary me-1 mb-1">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <span className={`badge ${project.languageColor} me-2`}>
                    {project.tech[0]}
                  </span>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                    View on GitHub
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
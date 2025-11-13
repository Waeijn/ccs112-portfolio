import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "PHP", level: 75 },
        { name: "GDScript", level: 60 },
      ],
    },
    {
      category: "Web & Database Management",
      skills: [
        { name: "HTML / CSS / Bootstrap", level: 95 },
        { name: "Laravel (PHP Framework)", level: 70 },
        { name: "React (Frontend Library)", level: 85 },
        { name: "MySQLi (Database)", level: 80 },
      ],
    },
    {
      category: "Game Development & Cybersecurity",
      skills: [
        { name: "Godot Engine / GameMaker", level: 70 },
        { name: "Networking (Cisco)", level: 75 },
        { name: "General Cybersecurity", level: 80 },
      ],
    },
  ];

  return (
    <div className="container mt-5 pt-5">
      <h1 className="display-4 mb-4 text-center">My Core Expertise</h1>
      <p className="lead text-center mb-5 text-muted">Based on my technical proficiency in programming, web development, and security.</p>

      <div className="row justify-content-center">
        {skillCategories.map((categoryData) => (
          <div key={categoryData.category} className="col-md-8 col-lg-7 mb-5">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">{categoryData.category}</h4>
              </div>
              <div className="card-body">
                {categoryData.skills.map((skill) => (
                  <div key={skill.name} className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="fw-bold">{skill.name}</span>
                      <span className="small text-muted">{skill.level}%</span>
                    </div>
                    <div className="progress" style={{ height: "8px" }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: `${skill.level}%` }}
                        aria-valuenow={skill.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
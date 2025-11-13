import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML/CSS (Bootstrap)", level: 85 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js / Express", level: 80 },
        { name: "Python / Flask", level: 75 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      category: "Databases & DevOps",
      skills: [
        { name: "MongoDB", level: 70 },
        { name: "SQL (PostgreSQL)", level: 65 },
        { name: "Git & GitHub", level: 95 },
      ],
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="display-4 mb-4 text-center">Technical Skills</h1>
      <p className="lead text-center mb-5 text-muted">Technologies and tools I work with.</p>

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
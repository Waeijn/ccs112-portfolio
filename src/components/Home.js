import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const personalInfo = {
    name: "John Wayne Landong",
    title: "Full Stack Developer | Cybersecurity Enthusiast",
    bio: "Passionate about building scalable web applications and exploring the cutting edge of cybersecurity. Experienced in React, Node.js, and Python. Always eager to learn new technologies and solve complex problems with efficient code.",
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <header className="text-center mb-5">
            
            <h1 className="display-4 fw-bold">{personalInfo.name}</h1>
            <p className="lead text-muted">{personalInfo.title}</p>
          </header>

          <section className="card shadow-lg mb-5">
            <div className="card-body p-4 p-md-5">
              <h2 className="card-title mb-4 text-primary">About Me</h2>
              <p className="card-text fs-5">{personalInfo.bio}</p>
            </div>
          </section>

          <section className="row mb-5">
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h3 className="card-title mb-3">Quick Links</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item px-0">
                      <Link to="/projects" className="text-decoration-none">
                        <i className="bi bi-code-slash me-2"></i> View My Projects
                      </Link>
                    </li>
                    <li className="list-group-item px-0">
                      <Link to="/skills" className="text-decoration-none">
                        <i className="bi bi-tools me-2"></i> Technical Skills
                      </Link>
                    </li>
                    {/* The '/contact' link is kept as a placeholder but its functionality is now generic */}
                    <li className="list-group-item px-0">
                      <Link to="/contact" className="text-decoration-none">
                        <i className="bi bi-envelope me-2"></i> Contact Me
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h3 className="card-title mb-3">Placeholder Link</h3>
                  <p className="text-muted">
                    Information removed as requested. This section can be used for other links or details.
                  </p>
                  <a href="#" className="btn btn-secondary">
                    Generic Action
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
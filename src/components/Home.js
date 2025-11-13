import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const personalInfo = {
    name: "John Wayne S. Landong",
    title: "Third Year Computer Science Student | Student Leader",
    bio: "A 3rd-year Computer Science student at the University of Cabuyao, recognized for being meticulous, responsive, and grounded. I possess a strong sense of discipline and purpose, demonstrating critical thinking and the ability to collaborate effectively in both technical and creative teams. I seek myself as a student leader who leads by example—supporting others, encouraging teamwork, and fostering a culture of collaboration and integrity within the academic community.",
    email: "johnwaynelandong@gmail.com",
    phone: "09123508966",
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
              <hr />
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
                        <i className="bi bi-code-slash me-2"></i> View Projects
                      </Link>
                    </li>
                    <li className="list-group-item px-0">
                      <Link to="/contact" className="text-decoration-none">
                        <i className="bi bi-envelope me-2"></i> Contact / Info
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h3 className="card-title mb-3">Core Focus</h3>
                  <p className="text-muted">
                    Full Stack Development and Cybersecurity Enthusiast, grounded in strong academic leadership.
                  </p>
                  <Link to="/skills" className="btn btn-primary">
                    View Expertise
                  </Link>
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
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const contactInfo = {
    email: "johnwaynelandong@gmail.com",
    phone: "09123508966",
    location: "City of Cabuyao, Laguna, Region IV-A, Philippines",
    linkedin: "https://www.linkedin.com/in/john-wayne-landong/",
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-4 mb-4 text-center">Get In Touch</h1>
          <p className="lead text-center mb-5 text-muted">I'm currently a student but always open to learning opportunities and collaboration.</p>

          <div className="card shadow-lg border-0 p-4">
            <h3 className="card-title mb-4 text-primary">Contact Details</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="bi bi-envelope me-3 text-success"></i> 
                Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li className="list-group-item">
                <i className="bi bi-phone me-3 text-success"></i> 
                Phone: {contactInfo.phone}
              </li>
              <li className="list-group-item">
                <i className="bi bi-geo-alt me-3 text-success"></i> 
                Location: {contactInfo.location}
              </li>
            </ul>
            <div className="text-center mt-4">
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg me-3">View LinkedIn</a>
              <a href={`mailto:${contactInfo.email}`} className="btn btn-outline-dark btn-lg">Send Email</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
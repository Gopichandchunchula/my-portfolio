import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function About() {
  return (
    <div className="container-fluid contact-container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="info-section p-4">
            <h1 className="about-title">About Me</h1>
            <p>
              Hello! My name is <strong>Gopichand Chunchula</strong>, and I'm currently seeking a role in <strong>Software Engineering</strong>.
            </p>
            <p>Completed an internship at Vcube Software Solutions.</p>
            
            <h2 className="info-title">Education</h2>
            <p className="info-text">
              BSC with a grade of 85% from Sir C R Reddy College.
            </p>
            
            <h2 className="info-title">Address</h2>
            <p className="info-text">
              500072 Hyderabad Kukatpally,<br />Hyderabad, India
            </p>
            
            <h2 className="info-title">Phone</h2>
            <p className="info-text">
              +91 9652812557
            </p>
            
            <h2 className="info-title">Email</h2>
            <p className="info-text">
              gopichandchunchula@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

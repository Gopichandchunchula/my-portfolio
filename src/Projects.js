import React from 'react';

const project = [
  {
    title: "Online Library Book",
    description: "Django-based book borrowing system",
    additionalInfo:
      "Built a full-stack Library Management System using Django and React. It includes user login, book inventory, borrowing/return, and admin CRUD functionality.",
    link: "https://github.com/gopichandchunchula/online-library-book"
  },
  {
    title: "Job Portal",
    description: "Django-based job application",
    additionalInfo:
      "Job_Portal is a web application that allows job seekers to apply for jobs and employers to post job openings with user authentication and role-based access.",
    link: "https://github.com/gopichandchunchula/online-library-book"
  }
];

const Project = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4" id="project">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">My Projects</h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {project.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-1 p-5"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{project.title}</h3>
            <p className="text-sm text-gray-500">{project.description}</p>
            <p className="text-gray-600 mt-2 text-sm">{project.additionalInfo}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

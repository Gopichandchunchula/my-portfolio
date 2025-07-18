import React from "react";

const skills = [
  {
    title: "Python",
    description: "Experienced in core Python, OOPs, data structures, and backend development.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  },
  {
    title: "MySQL",
    description: "Skilled in queries, joins, indexing, and stored procedures.",
    imageUrl: "https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png",
  },
  {
    title: "Django REST Framework",
    description: "Built REST APIs and integrated frontend with Django backend.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/django.svg",
  },
  {
    title: "HTML",
    description: "Strong in semantic HTML5, accessibility, and SEO-friendly structure.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    title: "CSS",
    description: "Skilled in Flexbox, Grid, animations, and responsive design.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/919/919826.png",
  },
  {
    title: "JavaScript",
    description: "Proficient in ES6+, DOM manipulation, events, and logic building.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    title: "React JS",
    description: "Built dynamic UIs using components, props, hooks, and state management.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
];

const Skills = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center", background: "#f9f9f9" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>My Skills</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              width: "220px",
              padding: "20px",
              borderRadius: "12px",
              background: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
          >
            <img
              src={skill.imageUrl}
              alt={skill.title}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>{skill.title}</h3>
            <p style={{ fontSize: "14px", color: "#555" }}>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

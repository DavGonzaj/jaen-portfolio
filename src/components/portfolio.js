// src/components/Portfolio.js
import React from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import Home from "./Home";
function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description:
        "This project demonstrates a responsive landing page with animations.",
      technologies: ["React", "CSS", "Framer Motion"],
    },
    {
      id: 2,
      title: "Project Two",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description:
        "An e-commerce platform with Stripe integration and admin dashboard.",
      technologies: ["ASP.NET", "C#", "Stripe API"],
    },
    {
      id: 3,
      title: "Project Three",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description:
        "A portfolio site with a dynamic dark mode toggle and animations.",
      technologies: ["React", "TailwindCSS"],
    },
    {
      id: 4,
      title: "Project Four",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description:
        "A data visualization dashboard with interactive charts and filters.",
      technologies: ["React", "Recharts", "Node.js"],
    },
    {
      id: 5,
      title: "Project Five",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "A music faceless YouTube automation project.",
      technologies: ["Python", "FFmpeg", "YouTube API"],
    },
  ];

  return (
    <div className="portfolio-page">
      <nav>
        <Link to="/" className="home-button">
          ⬅️ Home
        </Link>
      </nav>
      <motion.h1
        className="portfolio-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Portfolio
      </motion.h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2>{project.title}</h2>
            <div className="video-wrapper">
              <iframe
                src={project.video}
                title={project.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.description}
            </motion.p>
            <div className="tech-stack">
              <h4>Technologies Used:</h4>
              <ul>
                {project.technologies.map((tech, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

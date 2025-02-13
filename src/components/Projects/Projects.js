import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css"; 

function Projects() {
    // Sample project data
    const projectList = [
        {
            title: "Gamified Language Data Explorer",
            description: `An interactive, gamified platform that enables users to explore the NAU audio-text corpus 
            for language learning. The tool features personalized accounts, engaging games, and a context-aware search engine to 
            enhance comprehension and pronunciation. Leveraging AWS, MySQL, and PHP, I optimized backend operations for secure 
            and efficient content retrieval while ensuring seamless frontend-backend integration for a responsive user experience.`,
            link: "https://www.ceias.nau.edu/capstone/projects/CS/2023/PhoneticEvolution_S23/"
        },
        {
            title: "Space Shooter Game",
            description: `A top-down space shooter prototype in Unity using C#, incorporating industry-standard game design
             principles to create engaging and dynamic gameplay. Designed diverse enemy behaviors, power-ups, and balanced mechanics 
             while leveraging modular development for scalability and future feature expansion.`,
            link: "https://github.com/Tisaghu/Space-Shooter"
        },
        {
            title: "Time Tracker",
            description: `A web-based time tracking application built with Flask, JavaScript (ES6 modules), and Bootstrap. This app
             allows users to start, stop, and categorize tracked time, with logs stored in CSV format. Designed with modular architecture,
              it follows best practices in API design, front-end organization, and asynchronous JavaScript for a smooth user experience.`,
            link: "https://github.com/Tisaghu/Time-Tracker"
        }
    ];

    return (
        <section className="projects-section">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;

import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {

    // Sample project data
    const projectList = [
        {
            title: "Project 1",
            description: "This is a description of project 1",
            link: "https://www.example.com"
        },
        {
            title: "Project 2",
            description: "This is a description of project 2",
            link: "https://www.example.com"
        },
        {
            title: "Project 3",
            description: "This is a description of project 3",
            link: "https://www.example.com"
        }
    ];

    return (
        <section style={{ padding: "20px", background: "#f9f9f9" }}>
        <h2>Projects</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
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
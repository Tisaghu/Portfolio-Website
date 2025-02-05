import React from "react";

function ProjectCard({title, description, link }) {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            margin: "10px",
            maxWidth: "300px",
            background: "#fff"
        }}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

export default ProjectCard;
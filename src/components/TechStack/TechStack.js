import React from "react";
import "./TechStack.css";

//Import logos
import htmlLogo from "../../assets/html5-logo.png";
import cssLogo from "../../assets/css3-logo.png";
import jsLogo from "../../assets/js-logo.png";
import reactLogo from "../../assets/react-logo.png";
import pythonLogo from "../../assets/python-logo.png";

function TechStack() {
    // Categorize technologies
    const languages = [
        { name: "HTML", logo: htmlLogo },
        { name: "CSS", logo: cssLogo },
        { name: "JavaScript", logo: jsLogo },
        { name: "Python", logo: pythonLogo },
        { name: "PHP", logo: "" },
        { name: "C#", logo: "" },
        { name: "SQL", logo: "" },
        { name: "Java", logo: "" },
    ];
    const frameworks = [
        { name: "React", logo: reactLogo },
        { name: "AWS", logo: "" },
        { name: "Unity", logo: "" },
        { name: "Flask", logo: "" },
        { name: "MySQL", logo: "" },
        { name: "Bootstrap", logo: "" },
        { name: "Git", logo: "" }
    ];

    return (
        <section className="tech-stack-section">
            <h2>My Tech Stack</h2>

            <div className="tech-container">
                {/* Languages Section */}
                <div className="tech-box">
                    <h3>Programming Languages</h3>
                    <div className="tech-items">
                        {languages.map((tech, index) => (
                            <div key={index} className="tech-item">
                                {tech.logo && <img src={tech.logo} alt={tech.name} />}
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Frameworks & Tools Section */}
                <div className="tech-box">
                    <h3>Frameworks & Tools</h3>
                    <div className="tech-items">
                        {frameworks.map((tech, index) => (
                            <div key={index} className="tech-item">
                                {tech.logo && <img src={tech.logo} alt={tech.name} />}
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechStack;
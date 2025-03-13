import React from "react";
import "./TechStack.css";

//Import logos
import htmlLogo from "../../assets/html5-logo.svg";
import cssLogo from "../../assets/css-logo.svg";
import jsLogo from "../../assets/js-logo.svg";
import pythonLogo from "../../assets/python-logo.svg";
import phpLogo from "../../assets/php-logo.svg";
import cSharpLogo from "../../assets/c-sharp-logo.svg";
import javaLogo from "../../assets/java-logo.svg";
import reactLogo from "../../assets/react-logo.svg";
import awsLogo from "../../assets/aws-logo.svg";
import unityLogo from "../../assets/unity-logo.svg";
import flaskLogo from "../../assets/flask-logo.svg";
import mysqlLogo from "../../assets/mysql-logo.svg";
import bootstrapLogo from "../../assets/bootstrap-logo.svg";
import gitLogo from "../../assets/git-logo.svg";
import rLogo from "../../assets/r-logo.svg";



function TechStack() {
    // Categorize technologies
    const languages = [
        { name: "HTML", logo: htmlLogo},
        { name: "CSS", logo: cssLogo },
        { name: "JavaScript", logo: jsLogo },
        { name: "Python", logo: pythonLogo },
        { name: "PHP", logo: phpLogo },
        { name: "C#", logo: cSharpLogo },
        { name: "Java", logo: javaLogo },
        { name: "R", logo: rLogo },
    ];
    const frameworks = [
        { name: "React", logo: reactLogo },
        { name: "AWS", logo: awsLogo },
        { name: "Unity", logo: unityLogo},
        { name: "Flask", logo: flaskLogo },
        { name: "MySQL", logo: mysqlLogo },
        { name: "Bootstrap", logo: bootstrapLogo },
        { name: "Git", logo: gitLogo },
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
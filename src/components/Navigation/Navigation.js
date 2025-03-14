import React from "react";
import "./Navigation.css";

function Navigation() {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    return (
        <nav className="sidebar">
            <ul>
                <li onClick={() => scrollToSection("about")}>About</li>
                <li onClick={() => scrollToSection("projects")}>Projects</li>
                <li onClick={() => scrollToSection("tech-stack")}>Tech Stack</li>
                <li onClick={() => scrollToSection("contact")}>Contact</li>
            </ul>
        </nav>
    );
}

export default Navigation;
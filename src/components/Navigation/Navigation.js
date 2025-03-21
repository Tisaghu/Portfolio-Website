import React, { useState } from "react";
import "./Navigation.css";
import { FaBars, FaTimes} from "react-icons/fa";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if(section) {
            const yOffset = -100;
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
        setIsOpen(false);
    };

    return (
        <>
            {/*Hamburger Menu Button */}
            <button className="hamburger" aria-label="Navigation Menu" onClick={() => {
                setIsOpen(!isOpen);
                console.log("Sidebar state:", !isOpen); //debugging log
            }}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
                    
            {/*Sidebar*/}
            <nav className={`sidebar ${isOpen ? "open" : ""}`}>
                <ul>
                    <li onClick={() => scrollToSection("about")}>About</li>
                    <li onClick={() => scrollToSection("projects")}>Projects</li>
                    <li onClick={() => scrollToSection("tech-stack")}>Tech Stack</li>
                    <li onClick={() => scrollToSection("footer")}>Contact</li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;
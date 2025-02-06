import React from "react";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import "./Footer.css"; 

const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <a href="https://github.com/Tisaghu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/samuelasher/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="/Samuel_Asher_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                    <FaFilePdf />
                </a>
            </div>
            <p className="footer-text">© {new Date().getFullYear()} Samuel Asher. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;

import React from "react";
import "./Header.css";

const Header = ({ isDarkMode, setIsDarkMode }) => {
    return (
        <header className="header">
            <h1 className="header-title">Samuel Asher</h1>
            <p className="header-subtitle">Software Engineer</p>

            {/* Dark Mode Toggle Button */}
            <button className="theme-toggle" onClick={() => setIsDarkMode((prevMode) => !prevMode)}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </header>
    );
};

export default Header;

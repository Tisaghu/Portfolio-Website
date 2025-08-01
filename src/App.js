import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  const storedTheme = localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === "dark"); //Store theme preferences

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <>
      <Navigation />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main>
        <section id="about" className="section"><About /></section>
        <section id="projects" className="section"><Projects /></section>
        <section id="tech-stack" className="section"><TechStack /></section>
        <section id="contact" className="section"><Contact /></section>
      </main>

      <footer className="section"><Footer /></footer>
    </>
  );
}

export default App;

import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Navigation />
      <Header />

      <div className ="main-content">
      <section id="about" className="section"><About /></section>
      <section id="projects" className="section"><Projects /></section>
      <section id="tech-stack" className="section"><TechStack /></section>
      <section id="contact" className="section"><Contact /></section>
      </div>

      <section id="footer" className="section"><Footer /></section>
    </div>
  );
}

export default App;

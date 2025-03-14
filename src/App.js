import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <section id="about" className="section"><About /></section>
      <section id="projects" className="section"><Projects /></section>
      <section id="tech-stack" className="section"><TechStack /></section>
      <section id="contact" className="section"><Footer /></section>
    </div>
  );
}

export default App;

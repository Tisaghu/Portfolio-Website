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
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="tech-stack"><TechStack /></section>
      <section id="contact"><Footer /></section>
    </div>
  );
}

export default App;

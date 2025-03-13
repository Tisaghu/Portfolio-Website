import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;

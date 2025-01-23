import React from "react";
//import Header from "./Header";
import About from "./About";

function Header() {
  return (
    <header style={{ textAlign: "center", padding: "20px", background: "#282c34", color: "white" }}>
      <h1>My Portfolio</h1>
      <p>Software Engineer</p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
}

export default App;

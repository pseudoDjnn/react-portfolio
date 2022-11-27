import React, { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  // ADD useState FOR CURRENT SELECTION
  const [currentState, setCurrentState] = useState();

  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Project />
      currentState={currentState}
      setCurrentState={setCurrentState}
      <Footer />
    </div>
  );
}

export default App;

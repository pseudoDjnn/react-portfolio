import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NavBar from "./components/Nav";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { capitalizeFirstLetter } from "./utils/helpers";

function App() {
  const [currentSelect, setCurrentSelect] = useState("About Me");

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentSelect);
  }, [currentSelect]);
  return (
    <div>
      <NavBar
        currentSelect={currentSelect}
        setCurrentSelect={setCurrentSelect}
      />
      <Header />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

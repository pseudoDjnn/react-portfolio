import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
// import Project from "./Project";
// import Footer from "./Footer";

function App() {
  // ADD useState FOR CURRENT SELECTION
  const [currentState, setCurrentState] = useState();

  return (
    <div className="bg-gray-200 dark:bg-gray-800 flex flex-col min-h-screen justify-between">
      <Nav currentState={currentState} setCurrentState={setCurrentState} />
      <Header currentState={currentState}></Header>
    </div>
  );
}

export default App;

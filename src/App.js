import React from "react";
import Header from "./components/Header";
// import Navigation from "./Navigation";
// import Project from "./Project";
// import Footer from "./Footer";

function App() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow-md">
      <Header className="text-3xl text-gray-700 fornt-bold mb-5">
        {" "}
        Welcome
      </Header>
      <h1>Hello World</h1>
      <p className="text-gray-500 text-lg">This should work!</p>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Header from "./components/About";
import NavBar from "./components/Nav";
import About from "./components/Header";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Portfolio from "./components/Project";

function App() {
	const [currentSelect, setCurrentSelect] = useState(false);

	return (
		<div>
			<NavBar
				currentSelect={currentSelect}
				setCurrentSelect={setCurrentSelect}
			/>
			<Header currentSelect={currentSelect} />
			<About />
			<Project />
			<Experience />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;

import React from "react";
import Jate from "../../assets/portfolio/JATE.png";
import password from "../../assets/portfolio/password.png";
import quiz from "../../assets/portfolio/quiz.png";
import horizon from "../../assets/portfolio/Event_Horizon.png";
import wish from "../../assets/portfolio/wish.png";
// import tech from "../../assets/portfolio/tech_blog.png";
import chunk from "../../assets/portfolio/chunkd.png";

const Portfolio = () => {
	const projectPortfolio = [
		{
			id: 1,
			src: Jate,
			appName: "Just Another Text Editor",
			repoLink: "https://github.com/pseudoDjnn/JATE-Text-Editor",
			deploy: "https://young-plateau-94586.herokuapp.com/",
		},
		{
			id: 2,
			src: password,
			appName: "Random Password Generator",
			repoLink: "https://github.com/pseudoDjnn/Random-Password-Generator",
			deploy: "https://pseudodjnn.github.io/Random-Password-Generator/",
		},
		{
			id: 3,
			src: quiz,
			appName: "Coding Quiz App",
			repoLink: "https://github.com/pseudoDjnn/Js-Coding-Quiz-App",
			deploy: "https://pseudodjnn.github.io/Js-Coding-Quiz-App/",
		},
		{
			id: 4,
			src: horizon,
			appName: "Event Horizon",
			repoLink: "https://github.com/pseudoDjnn/Event-Horizon",
			deploy: "https://pseudodjnn.github.io/Event-Horizon/",
		},
		{
			id: 5,
			src: chunk,
			appName: "CHUNK'D",
			repoLink: "https://github.com/PuppetAJ/ReactMC",
			deploy: "https://chunkd-aj.herokuapp.com/",
		},
		{
			id: 6,
			src: wish,
			appName: "Wishagram",
			repoLink: "https://github.com/pseudoDjnn/Wishagram",
			deploy: "https://glacial-mesa-81435.herokuapp.com/",
		},
	];

	return (
		<div
			name="portfolio"
			className="bg-gradient-to-b from-neutral-800 via-zinc-700 to-neutral-900 w-full text-orange-100 md:h-screen"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-orange-800">
						Portfolio Projects
					</p>
					<p className="py-8">
						A listing of all current projects for my 2022 portfolio.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{projectPortfolio.map(({ id, src, appName, repoLink, deploy }) => (
						<div key={id} className="shadow-md shadow-slate-600 rounded-lg">
							<img
								src={src}
								alt="demo"
								className="rounded-md duration-700 hover:scale-105"
							/>
							<div className="flex items-center justify-center">
								<a
									href={repoLink}
									className="w-1/2 px-6 py-2 m-4 duration-300 hover:scale-105"
								>
									{appName}
								</a>
								<a
									href={deploy}
									className="w-1/2 px-6 py-2 m-4 duration-300 hover:scale-105"
								>
									Deployment
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;

import logo from "../logo.svg";
import "../App.css";

function About() {
	return (
		<div className="container p-10 mx-auto min-h-screen flex flex-col justify-center items-center">
			<div className="grid grid-cols-1 ">
				{/* about */}
				<div className="text-4xl font-bold text-center mx-10 text-black dark:text-white">
					<h1>About this project</h1>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="flex justify-center items-center md:order-2">
					<img
						src={logo}
						className="App-logo w-full object-contain"
						alt="logo"
					/>
				</div>
				<div className="text-xl flex justify-center flex-col items-center text-justify md:order-1 md:p-10 ">
					<p className="text-black dark:text-white">
						This is a simple todo list app made with React.js. It's
						not a perfect app, but it's a good starting point for
						learning React.js. This is my first experience with
						React.js, and I hope you enjoy using this app. If you
						encounter any bugs, I'll do my best to fix them. I've
						learn lots of things from this project, like react
						hooks, react router, and many more. I'm grateful for
						that. if you to see this project's source code, you can
						visit my github page.
					</p>
					<div className="flex justify-center items-center pt-5">
						<a href="https://github.com/Alvalens/react-tools">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-all">
								<i className="fa-brands fa-github text-white fa-2x"></i>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default About;

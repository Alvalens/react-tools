import logo from "../logo.svg";
import "../App.css";

import Footer from "../components/Footer";
function Home() {
	const foo = () => {
		return <i> ini footer</i>;
	};
	return (
		<div className="App">
			<header className="App-header">
				{/* divide to 2 section on md upper and 1 section in md below */}
				<div className="container mx-auto px-0 grid grid-cols-1 md:grid-cols-2 md:px-4 min-h-screen">
					<div className="flex justify-center items-center md:order-2">
						<img
							src={logo}
							className="App-logo"
							alt="logo"
							id="logo"
						/>
					</div>
					<div className="text-xl flex justify-center flex-col items-center text-justify md:order-1 md:p-10">
						{/* title */}
						<div className="text-4xl font-bold text-center md:text-start mx-10 pb-10">
							<h1>About this project</h1>
						</div>
						<p className="p-10 sm:p-5">
							This is a simple tools project made with React.js.
							There are 3 main tools in this project, namely:{" "}
							<span className="bg-blue-500 text-white rounded-md px-2 py-1 text-sm font-medium">
								Todo List
							</span>
							,{" "}
							<span className="bg-blue-500 text-white rounded-md px-2 py-1 text-sm font-medium">
								Note
							</span>
							, and{" "}
							<span className="bg-blue-500 text-white rounded-md px-2 py-1 text-sm font-medium">
								Expense Tracker
							</span>
							. It's not a perfect app, but it's a good starting
							point for learning React.js. This is my first
							experience with React.js, and I hope you enjoy using
							this app. If you encounter any bugs, I'll do my best
							to fix them.
						</p>
						<div className="flex justify-center items-center pt-5">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">
								more about me
							</button>
						</div>
					</div>
				</div>
				{/* divide to 3 section on md upper and 1 section in md below */}
				<div className="container mx-auto px-0 md:px-4 py-10 my-10">
					{/* main title */}
					<div className="text-4xl font-bold text-center mx-10 pb-10">
						<h1>Tools</h1>
					</div>
					<div className="container mx-auto px-0 grid grid-cols-1 md:grid-cols-3 md:px-4">
						{/* 3 card with fontawsome as main image */}
						<div className="flex justify-center items-center">
							<div
								className="bg-white rounded-lg shadow-xl p-5"
								style={{ minWidth: "390px" }}>
								<div className="flex justify-center items-center">
									<div className="bg-blue-500 rounded-full p-8">
										<i className="fas fa-clipboard-list text-white fa-4x"></i>
									</div>
									<div className="flex flex-col justify-center items-center ml-5">
										<h1 className="text-2xl font-bold">
											Todo List
										</h1>
										<p className="text-sm text-gray-500">
											Manage your daily activities
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flex justify-center items-center">
							<div
								className="bg-white rounded-lg shadow-xl p-5"
								style={{ minWidth: "390px" }}>
								<div className="flex justify-center items-center">
									<div className="bg-blue-500 rounded-full p-8">
										<i className="fas fa-sticky-note text-white fa-4x"></i>
									</div>
									<div className="flex flex-col justify-center items-center ml-5">
										<h1 className="text-2xl font-bold">
											Note
										</h1>
										<p className="text-sm text-gray-500">
											Manage your notes
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flex justify-center items-center">
							<div
								className="bg-white rounded-lg shadow-xl p-5"
								style={{ minWidth: "390px" }}>
								<div className="flex justify-center items-center">
									<div className="bg-blue-500 rounded-full p-8">
										<i className="fas fa-money-bill-wave text-white fa-4x"></i>
									</div>
									<div className="flex flex-col justify-center items-center ml-5">
										<h1 className="text-2xl font-bold">
											Expense Tracker
										</h1>
										<p className="text-sm text-gray-500">
											Manage your expenses
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<Footer var={foo} />
		</div>
	);
}

export default Home;

import logo from "../logo.svg";
import "../App.css";
import Button from "../components/Button";


function Home() {
	return (
		<div className="App">
			<header className="App-header">
				{/* divide to 2 section on md upper and 1 section in md below */}
				<div className="container mx-auto px-0 grid grid-cols-1 md:grid-cols-2 md:px-4 min-h-screen mt-14 mt-sm-0">
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
				{/* tools */}
				<div className="container mx-auto px-0 md:px-4 py-10 my-10">
					<div className="text-4xl font-bold text-center mx-10 pb-10">
						<h1>Tools</h1>
					</div>
					<div className="container mx-auto px-0 grid grid-cols-1 md:grid-cols-3 md:px-4">
						<a
							href="todo"
							className="flex justify-center items-center hover:scale-105 transition-transform mx-4">
							<div className="bg-white rounded-lg shadow-xl p-5 min-w-full">
								<div className="flex justify-center items-center">
									<div className="bg-blue-500 rounded-full p-8">
										<i className="fas fa-clipboard-list text-white fa-4x mx-2 md:mx-4"></i>
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
						</a>

						<a
							href="note"
							className="flex justify-center items-center hover:scale-105 transition-transform mx-4">
							<div className="bg-white rounded-lg shadow-xl p-5 min-w-full">
								<div className="flex justify-between md:justify-center items-center">
									<div className="bg-blue-500 rounded-full p-8">
										<i className="fas fa-sticky-note text-white fa-4x mx-1 md:mx-2"></i>
									</div>
									<div className="flex flex-col justify-center items-center mr-8 sm:mr-0 sm:ml-5">
										<h1 className="text-2xl font-bold">
											Note
										</h1>
										<p className="text-sm text-gray-500">
											Manage your notes
										</p>
									</div>
								</div>
							</div>
						</a>

						<a
							href="expense-tracker"
							className="flex justify-center items-center hover:scale-105 transition-transform mx-4">
							<div className="bg-white rounded-lg shadow-xl p-5 min-w-full">
								<div className="flex justify-center items-center">
									<div className="bg-blue-500 rounded-full p-8">
										<i className="fa-solid fa-coins text-white fa-4x"></i>
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
						</a>
					</div>
				</div>
				{/* contact */}
				<div className="container mx-auto px-0 md:px-4 py-10 my-10">
					<div className="text-4xl font-bold text-center mx-10 pb-10">
						<h1>Contact me</h1>
					</div>
					<div className="container mx-auto px-4">
						{/* email */}
						<Button
							icon="fa-solid fa-envelope"
							link="mailto:Alvalen.shafel04@gmail.com?subject=Hello&body=Hello">
							Email
						</Button>
						{/* github */}
						<Button
							icon="fa-brands fa-github"
							link="https:github.com/Alvalens">
							Github
						</Button>
						{/* linkedin */}
						<Button
							icon="fa-brands fa-linkedin"
							link="https://www.linkedin.com/in/alvalen-shafel-8a081a254/">
							Linkedin
						</Button>
						{/* instagram */}
						<Button
							icon="fa-brands fa-instagram"
							link="https://instagram.com/alvalens_">
							Instagram
						</Button>
						{/* discord */}
						<Button
							icon="fa-brands fa-discord"
							link="https://discordapp.com/users/bloody#6118">
							Discord
						</Button>
					</div>
				</div>
				{/* quote */}
				<div className="container mx-auto px-0 md:px-4 py-10 my-10"></div>
			</header>
		</div>
	);
}

export default Home;

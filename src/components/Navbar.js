import "../css/Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {

	// dark mode
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem("darkMode") === "true" ? true : false
	);


  useEffect(() => {
		const prefersDarkMode = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		const storedDarkMode = localStorage.getItem("darkMode");

		if (storedDarkMode !== null) {
			setDarkMode(storedDarkMode === "true");
		} else if (prefersDarkMode) {
			setDarkMode(false);
		} else {
			setDarkMode(true);
		}
  }, []);

  useEffect(() => {
		localStorage.setItem("darkMode", darkMode);
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
  }, [darkMode]);

  const toggleDarkMode = () => {
		setDarkMode(!darkMode);
  };
	
	// show and hide the navigation links when the hamburger icon is clicked
	function showNav() {
		const navLinks = document.getElementById("nav-links");
		navLinks.classList.toggle("show");
	}
	return (
		<nav className="bg-gray-800 fixed w-screen z-50 ">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo or site title */}
					<div className="flex items-center justify-center">
						{/* icon */}
						<div className="icon">
							<i className="fa-brands fa-react fa-3x mr-5 text-white"></i>
						</div>
						<span className="text-white font-bold text-xl">
							React Tools
						</span>
					</div>

					{/* Navigation links */}
					<div className="hidden md:block">
						<div className="ml-10 flex justify-center items-center space-x-4">
							<div className="ml-10 flex items-baseline space-x-4">
								<a
									href="/"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Home
								</a>
								<a
									href="/about"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									About
								</a>
								<a
									href="/todo"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Todo
								</a>
								<a
									href="/note"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Note
								</a>
								<a
									href="/expense-tracker"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Expense Tracker
								</a>
							</div>
							<div className="toggle-switch">
								<label className="switch-label">
									<input
										type="checkbox"
										className="checkbox"
										checked={!darkMode}
										onChange={toggleDarkMode}
									/>
									<span className="slider"></span>
								</label>
							</div>
						</div>
					</div>

					{/* Responsive Menu */}
					<div className=" md:hidden ">
						<button
							id="nav-toggle"
							onClick={showNav}
							className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
							aria-label="Toggle navigation">
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Responsive Navigation */}
				<div id="nav-links" className="">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<a
							href="/"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Home
						</a>
						<a
							href="/about"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							About
						</a>
						<a
							href="/todo"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Todo
						</a>
						<a
							href="/note"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Note
						</a>
						<a
							href="/expense-tracker"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Expense Tracker
						</a>
						{/* toggle dark mode */}
						<div className="toggle-switch">
							<label className="switch-label">
								<input
									type="checkbox"
									className="checkbox"
									checked={darkMode}
									onChange={toggleDarkMode}
								/>
								<span className="slider"></span>
							</label>
							</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

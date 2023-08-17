import "../css/Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
			setDarkMode(storedDarkMode === "true" ? true : false);
		} else if (prefersDarkMode) {
			setDarkMode(true);
		} else {
			setDarkMode(false);
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

const [navOpen, setNavOpen] = useState(false);

 const toggleNav = () => {
		setNavOpen(!navOpen);
 };

 const closeNav = () => {
		setNavOpen(false);
 };

  useEffect(() => {
		const handleOutsideClick = (event) => {
			if (
				navOpen &&
				!event.target.closest(".navbar-links") &&
				!event.target.closest("#nav-toggle")
			) {
				closeNav();
			}
		};

		document.addEventListener("click", handleOutsideClick);
		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
  }, [navOpen]);
	
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
								<Link
									to="/"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Home
								</Link>
								<Link
									to="/about"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									About
								</Link>
								<Link
									to="/todo"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Todo
								</Link>
								<Link
									to="/note"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Note
								</Link>
								<Link
									to="/expense-tracker"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Expense Tracker
								</Link>
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
							onClick={toggleNav}
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
				<div
					id="nav-links"
					className={`md:hidden nav-links ${navOpen ? "show" : ""}`}>
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link
							to="/"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Home
						</Link>
						<Link
							to="/about"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							About
						</Link>
						<Link
							to="/todo"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Todo
						</Link>
						<Link
							to="/note"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Note
						</Link>
						<Link
							to="/expense-tracker"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Expense Tracker
						</Link>
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

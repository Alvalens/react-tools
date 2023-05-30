import '../css/Navbar.css'

const Navbar = () => {
	return (
		<nav className="bg-gray-800 fixed w-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo or site title */}
					<div className="flex-shrink-0">
						<span className="text-white font-bold text-xl">
							My Website
						</span>
					</div>

					{/* Navigation links */}
					<div className="hidden md:block">
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
								About
							</a>
						</div>
					</div>

					{/* Responsive Menu */}
					<div className="md:hidden ">
						<button
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
				<div className="md:hidden">
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
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
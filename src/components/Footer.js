import React from "react";

class Footer extends React.Component {
	render() {
		return (
			<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
				<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
					<div className="sm:flex sm:items-center sm:justify-between">
						<a href="/" className="flex items-center mb-4 sm:mb-0">
							<i className="fa-brands fa-react fa-3x mr-5"></i>
							<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
								React Tools
							</span>
						</a>
						<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
							<li>
								<a
									href="/"
									className="mr-4 hover:underline md:mr-6 ">
									Home
								</a>
							</li>
							<li>
								<a
									href="/todo"
									className="mr-4 hover:underline md:mr-6">
									Todo
								</a>
							</li>
							<li>
								<a
									href="/note"
									className="mr-4 hover:underline md:mr-6 ">
									Note
								</a>
							</li>
							<li>
								<a
									href="/expense-tracker"
									className="hover:underline">
									Expense Tracker
								</a>
							</li>
						</ul>
					</div>
					<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
					<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© {this.props.var}{" "}
						<a
							href="https://alvalens.my.id"
							className="hover:underline">
							Alvalens
						</a>
						. All Rights Reserved.
					</span>
				</div>
			</footer>
		);
	}
}
export default Footer;

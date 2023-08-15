import React from "react";

const Button = ({ children, link, icon }) => {
  return (
		<a href={link ?? ""} className="">
			<button
				type="button"
				className="px-6 py-3.5 m-1 text-base font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
				<i className={"mr-2 " + icon ?? ""}></i>
				{children}
			</button>
		</a>
  );
};
export default Button;
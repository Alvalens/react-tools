import React from "react";

const Button = ({ children, link, icon }) => {
  return (
		<a href={link ?? ""} className="">
			<button
				type="button"
				className="px-3 py-2 m-1 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
				<i className={"mr-2 " + icon ?? ''}></i>
				{children}
			</button>
		</a>
  );
};
export default Button;
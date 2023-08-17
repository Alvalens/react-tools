import { useState, useEffect } from "react";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Note from "./pages/Note";
import Expense from "./pages/Expense";
import Page404 from "./pages/404";
import { Route, Routes, useLocation } from "react-router-dom";
import { NProgress } from "@tanem/react-nprogress";

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleStart = () => {
			setIsLoading(true);
		};

		const handleStop = () => {
			setIsLoading(false);
		};

		window.addEventListener("load", handleStop);
		window.addEventListener("beforeunload", handleStart);

		return () => {
			window.removeEventListener("load", handleStop);
			window.removeEventListener("beforeunload", handleStart);
		};
	}, []);

	useEffect(() => {
		setIsLoading(true);

		const timeoutId = setTimeout(() => {
			setIsLoading(false);
		}, 500); 

		return () => {
			clearTimeout(timeoutId);
		};
	}, [location]);

	return (
		<>
			<NProgress isAnimating={isLoading} minimum={0.1}>
				{({ isFinished, progress, animationDuration }) => (
					<div
						className="bar"
						style={{
							animationDuration: `${animationDuration}ms`,
							opacity: isFinished ? 0 : 1,
							width: `${progress * 100}%`, // Change this line
						}}>
						<div className="peg"></div>
					</div>
				)}
			</NProgress>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/todo" element={<Todo />} />
				<Route path="/note" element={<Note />} />
				<Route path="/expense-tracker" element={<Expense />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</>
	);
}

export default App;

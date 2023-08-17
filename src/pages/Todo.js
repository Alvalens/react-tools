import React, { useState, useEffect } from "react";
import "../App.css";

function Todo() {
	const [activity, setActivity] = useState("");
	const [edit, setEdit] = useState("");
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem("todos")) || []
	);
	const [msg, setMsg] = useState("");

	useEffect(() => {
		try {
			localStorage.setItem("todos", JSON.stringify(todos));
		} catch (error) {
			console.error("Error saving todos to local storage:", error);
		}
	}, [todos]);

	function generateId() {
		return Date.now();
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (!activity) {
			return setMsg("Tidak boleh kosong");
		} else {
			setMsg("");
		}

		if (edit.id) {
			const newTodos = {
				id: edit.id,
				activity,
				isComplete: edit.isComplete, // Preserve the completion status
			};
			const newTodo = todos.findIndex(function (todo) {
				return todo.id === edit.id;
			});

			const newTodoList = [...todos];
			newTodoList[newTodo] = newTodos;
			setTodos(newTodoList);
			setActivity("");
			setEdit("");
			return;
		}
		setTodos([...todos, { id: generateId(), activity, isComplete: false }]);
		setActivity("");
	}

	function removeHandler(id) {
		const newTodos = todos.filter(function (todo) {
			return todo.id !== id;
		});
		setTodos(newTodos);
		cancelHandler();
	}

	function editHandler(Todo) {
		setActivity(Todo.activity);
		setEdit(Todo);
	}

	function cancelHandler() {
		setActivity("");
		setEdit("");
	}

	// clear all todos
	function clearHandler() {
		setTodos([]);
	}

	function toggleComplete(id) {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					isComplete: !todo.isComplete,
				};
			}
			return todo;
		});
		setTodos(newTodos);
	}

	return (
		<div
			className="p-4 pt-28  bg-white dark:bg-gray-900"
			style={{ minHeight: "90vh" }}>
			<div className="container mx-auto px-0 min-h-full min-w-full grid grid-cols-1 md:grid-cols-2">
				<div className="flex justify-start flex-col items-center min-w-full">
					<h1 className="text-2xl font-bold mb-4 text-black dark:text-white">
						Todo List
					</h1>
					<form
						className="mb-4 min-w-full px-3 md:px-20 "
						onSubmit={handleSubmit}>
						<input
							type="text"
							name="todo"
							value={activity}
							placeholder="Insert here..."
							onChange={(e) => setActivity(e.target.value)}
							className={`border border-gray-400 p-2 rounded min-w-full ${
								msg ? "border-red-500" : ""
							}`}
						/>
						<div className="err">
							<p className="text-red-500"> {msg}</p>
						</div>
						<div className="flex justify-center items-center buttons mt-3">
							<button
								type="submit"
								className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-2 rounded">
								{edit.id ? "Save Todo" : "New Todo"}
							</button>
							{edit.id && (
								<button
									onClick={cancelHandler}
									className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 ml-2 rounded">
									Cancel
								</button>
							)}
							{todos.length > 0 && (
								<button
									onClick={clearHandler}
									className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded">
									Clear All
								</button>
							)}
						</div>
					</form>
				</div>

				<div className="flex justify-start flex-col items-center md:border-l-2">
					<div className="hidden md:block">
						<h1 className="text-2xl font-bold mb-4 text-black dark:text-white">
							List
						</h1>
					</div>
					{todos.length === 0 ? (
						<p className="text-black dark:text-white">
							Tidak ada data
						</p>
					) : (
						// Inside your Todo component's return statement, update the rendering of the todo list
						<ul className="overflow-container min-w-full px-4 md:px-10 overflow-y-scroll max-h-[40rem] md:max-h-[45rem]">
							{todos.map((todo) => (
								<li
									key={todo.id}
									className={`flex flex-row justify-between items-center p-2 mb-2 min-w-full border-l-4 ${
										todo.isComplete
											? "border-l-green-500 bg-green-100 dark:bg-green-600"
											: "border-l-blue-500 bg-slate-100 dark:bg-slate-500"
									} rounded shadow`}>
									<span
										className={`text-start me-3 ${
											todo.isComplete
												? "line-through"
												: ""
										}`}>
										{todo.activity}
									</span>
									<div
										className="buttons flex flex-row justify-end items-center"
										style={{ minWidth: "150px" }}>
										<button
											onClick={() => editHandler(todo)}
											className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded mr-2 ${
												todo.isComplete ? "hidden" : ""
											}`}>
											<i className="fa-solid fa-pen-to-square"></i>
										</button>
										<button
											onClick={() =>
												removeHandler(todo.id)
											}
											className={`bg-red-500 hover:bg-red-700 text-white font-bold rounded mr-2 ${
												todo.isComplete
													? "py-1 px-1"
													: "py-2 px-3"
											}`}>
											<i className="fa-solid fa-trash"></i>
										</button>
										{!todo.isComplete ? (
											<button
												onClick={() =>
													toggleComplete(todo.id)
												}
												className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
												<i className="fa-solid fa-check"></i>
											</button>
										) : (
											<button
												onClick={() =>
													toggleComplete(todo.id)
												}
												className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded">
												<i className="fa-solid fa-undo"></i>
											</button>
										)}
									</div>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
}

export default Todo;

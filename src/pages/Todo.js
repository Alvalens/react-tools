import React, { useState } from "react";
import "../App.css";

function Todo() {
	const [activity, setActivity] = useState("");
	const [edit, setEdit] = useState(''); 
	const [todos, setTodos] = useState([]);
	const [msg , setMsg] = useState('');

	function generateId() {
		return Date.now();
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (!activity) {
			return setMsg('tidak boleh kosong');
		} else {
			setMsg('');
		}
		
		if (edit.id) {
			const newTodos = {
				id: edit.id,
				activity
			};
			const newTodo = todos.findIndex(function (todo) {
				return todo.id === edit.id;
			});
				
			const newTodoList = [...todos];
			newTodoList[newTodo] = newTodos;
			setTodos(newTodoList);
			setActivity("");
			setEdit('');

			return;
		}
		setTodos([...todos, { id: generateId(), activity }]);
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
		setActivity(Todo.activity)
		setEdit(Todo)
	}

	function cancelHandler() {
		setActivity("");
		setEdit('');
		
	}

	return (
		<div className="p-4 grid place-content-center min-h-screen">
			<h1 className="text-2xl font-bold mb-4">Todo List</h1>
			{msg && <p>{msg}</p>}
			<form
				className="mb-4"
				onSubmit={handleSubmit}>
				<input
					type="text"
					value={activity}
					placeholder="aktivitas"
					onChange={(e) => setActivity(e.target.value)}
					className="border border-gray-400 p-2 rounded"
				/>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded">
					{edit.id ? "Simpan" : "Tambah"}
				</button>
				{edit.id && (
					<button
						onClick={cancelHandler}
						className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 ml-2 rounded">
						Cancel
					</button>
				)}
			</form>
			{todos.length === 0 ? (
				<p>Tidak ada data</p>
			) : (
				<ul>
					{todos.map((todo) => (
						<li
							key={todo.id}
							className="flex items-center mb-2">
							<span className="flex-grow">{todo.activity}</span>
							<button
								onClick={() => editHandler(todo)}
								className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
								U
							</button>
							<button
								onClick={() => removeHandler(todo.id)}
								className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
								X
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
export default Todo;

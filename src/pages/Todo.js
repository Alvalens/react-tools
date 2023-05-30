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

	function edithandler(Todo) {
		setActivity(Todo.activity)
		setEdit(Todo)
	}

	function cancelHandler() {
		setActivity("");
		setEdit('');
		
	}

	return (
		<div>
			<h1>Todo List</h1>
			{msg ? <p>{msg}</p> : ''}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name=""
					id=""
					value={activity}
					placeholder="aktivitas"
					onChange={function (e) {
						setActivity(e.target.value);
					}}
				/>
				<button type="submit">
				{edit.id ? 'simpan' : 'tambah'}</button>
				{edit.id ? <button onClick={cancelHandler}>cancel</button> : ''}
			</form>
			{todos.length === 0 ? <p>tidak ada data</p> : 
			
			<ul>
				{todos.map(function (todo) {
					return (
						<li key={todo.id}>
							{todo.activity}
							<button onClick={edithandler.bind(this, todo)}>U</button>
							<button onClick={removeHandler.bind(this, todo.id)}>
								X
							</button>
						</li>
					);
				})}
			</ul>
			}
		</div>
	);
}
export default Todo;

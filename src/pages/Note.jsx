import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "../App.css";
import "../css/Navbar.css";

function Note() {
	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem("notes")) || []
	);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	function addNote() {
		const newNote = {
			id: nanoid(),
			color: getRandomColor(),
			text: "",
		};
		setNotes([...notes, newNote]);
	}

	const deleteNote = (index) => {
		const newNotes = [...notes];
		newNotes.splice(index, 1);
		setNotes(newNotes);
	};

	function getRandomColor() {
		const colors = [
			"bg-pink-200",
			"bg-purple-200",
			"bg-blue-200",
			"bg-green-200",
			"bg-yellow-200",
			"bg-red-200",
			"bg-indigo-200",
			"bg-gray-200",
		];
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	}
    function adjustTextareaHeight(event, index) {
		const textarea = event.target;
		textarea.style.height = "auto"; // Reset to auto height
		const computedHeight = Math.min(textarea.scrollHeight, 300); // Limit to 300px
		textarea.style.height = `${computedHeight}px`;

		const updatedNotes = [...notes];
		updatedNotes[index].text = textarea.value;
		setNotes(updatedNotes);
	}
  // clear all notes
  const clearAll = () => {
    setNotes([]);
  };
	return (
		<div
			className="p-4 pt-28 bg-white dark:bg-gray-900"
			style={{ minHeight: "90vh" }}>
			<div className="container mx-auto px-0 min-h-full min-w-full grid grid-cols-1 md:grid-cols-2">
				<div className="flex justify-start flex-col items-center min-w-full">
					<h1 className="text-xl font-bold mb-4 text-black dark:text-white">
						Notes
					</h1>
					<p className="hidden md:block lg:px-24 md:px-10 pb-5 text-gray-700 dark:text-white">
						You can add notes by clicking this green button, the
						notes will automaticly saved. You can also delete the
						notes one by one by clicking the trash icon in each note
						or just clear all the notes by clicking the red button
						below.
					</p>
					<div className="buttons">
						<button
							className="bg-green-500 text-white px-4 py-2 rounded mb-4 mr-4"
							onClick={() => addNote()}>
							<i className="fa-solid fa-plus pr-3"></i>New Note
						</button>
						<button
							className="bg-red-500 text-white px-4 py-2 rounded mb-4"
							onClick={() => clearAll()}>
							<i className="fa-solid fa-trash pr-3"></i>Clear
							Notes
						</button>
					</div>
				</div>
				<div className="flex justify-start flex-col items-center md:border-l-2">
					<div className="hidden md:block">
						<h1 className="text-2xl font-bold mb-4 text-black dark:text-white">
							Note List
						</h1>
					</div>
					{notes.length === 0 ? (
						<p className="text-black dark:text-white">
							Tidak ada data
						</p>
					) : (
						<div className="overlow-container md:px-10 px-3 flex justify-start flex-col items-center min-w-full overflow-y-scroll max-h-[40rem] md:max-h-[45rem]">
							{notes.map((note, index) => (
								<div
									key={index}
									className={`note-card shadow-md mb-4 p-2 border rounded min-w-full ${note.color} `}>
									<div className="flex justify-between items-center">
										<div className="buttons max-w-[4rem]">
											<button
												className="bg-red-400 rounded py-4 px-1  hover:bg-red-700 mr-2 focus:outline-none focus:ring-2 focus:ring-red-100"
												onClick={() =>
													deleteNote(index)
												}>
												<i className="fa-solid fa-trash text-white px-2"></i>
											</button>
										</div>
										<div className="text flex-grow">
											<textarea
												value={note.text}
												onChange={(e) => {
													const updatedNotes = [
														...notes,
													];
													updatedNotes[index].text =
														e.target.value;
													setNotes(updatedNotes);
													adjustTextareaHeight(
														e,
														index
													);
												}}
												placeholder="Write your note here..."
												className="w-full rounded p-2 bg-transparent focus:border-blue-500 focus:outline-none focus:ring-2 shadow-inner "
												style={{
													height: "auto",
													minHeight: "50px",
													maxHeight: "300px",
													resize: "vertical",
													fontFamily:
														"Poppins, sans-serif",
												}}></textarea>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Note;

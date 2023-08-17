import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Modal from "../components/Modal";
import useModal from "../components/UseModal";
function Expense() {
	const [total, setTotal] = useState(0);
	const [expenses, setExpenses] = useState(
		JSON.parse(localStorage.getItem("expenses")) || []
	);
	const [amount, setAmount] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");
	const [index, setIndex] = useState(null);

	// save to local storage
	useEffect(() => {
		localStorage.setItem("expenses", JSON.stringify(expenses));
	}, [expenses]);

  // calculate total
  useEffect(() => {
    let total = 0;
    expenses.forEach((expense) => {
      if (expense.category === "income") {
        total += parseInt(expense.amount);
      } else if (expense.category === "expense") {
        total -= parseInt(expense.amount);
      }
    });
    setTotal(total);
  }, [expenses]);

	const addExpense = (e) => {
		e.preventDefault();
		let category = "";
		if (modalIncome.isOpen) {
			category = "income";
		} else if (modalExpense.isOpen) {
			category = "expense";
		}
		setExpenses([
			...expenses,
			{
				id: nanoid(),
				amount: amount,
				description: description,
				date: date || new Date().toISOString().slice(0, 10),
				category: category,
			},
		]);
		setAmount("");
		setDescription("");
		setDate("");

		if (modalIncome.isOpen) {
			setTotal(total + parseInt(amount));
			modalIncome.closeModal();
		} else if (modalExpense.isOpen) {
			setTotal(total - parseInt(amount));
			modalExpense.closeModal();
		}
	};

	const editExpense = (e, index) => {
		e.preventDefault();
		if (index !== null) {
			const newExpenses = [...expenses];
			const prevAmount = parseInt(expenses[index].amount);

			if (expenses[index].category === "income") {
				setTotal((prevTotal) => prevTotal - prevAmount);
			} else if (expenses[index].category === "expense") {
				setTotal((prevTotal) => prevTotal + prevAmount);
			}

			newExpenses[index].amount = amount;
			newExpenses[index].description = description;
			newExpenses[index].date = date;
			setExpenses(newExpenses);

			if (expenses[index].category === "income") {
				setTotal((prevTotal) => prevTotal + parseInt(amount));
			} else if (expenses[index].category === "expense") {
				setTotal((prevTotal) => prevTotal - parseInt(amount));
			}

			setAmount("");
			setDescription("");
			setDate("");
			setIndex(null);
			modalEdit.closeModal();
			return;
		}
	};

	const deleteExpense = (index) => {
		const newExpenses = [...expenses];
		newExpenses.splice(index, 1);
		setExpenses(newExpenses);
		// id category is income
		if (expenses[index].category === "income") {
			setTotal(total - parseInt(expenses[index].amount));
		} else if (expenses[index].category === "expense") {
			setTotal(total + parseInt(expenses[index].amount));
		}
	};

  // total income
  const totalIncome = expenses.reduce((total, expense) => {
    if (expense.category === "income") {
      return (total += parseInt(expense.amount));
    }
    return total;
  }, 0);

  // total expense
  const totalExpense = expenses.reduce((total, expense) => {
    if (expense.category === "expense") {
      return (total += parseInt(expense.amount));
    }
    return total;
  }, 0);

	// modal init
	const modalIncome = useModal();
	const modalExpense = useModal();
	const modalEdit = useModal();

	return (
		<div
			className="p-4 pt-28 bg-white dark:bg-gray-900"
			style={{ minHeight: "75vh" }}>
			<div className="container mx-auto px-0 min-h-full min-w-full grid grid-cols-1 md:grid-cols-2">
				<div className="flex justify-start flex-col items-center min-w-full px-4 md:px-24">
					<h1 className="text-2xl font-bold mb-4 text-black dark:text-white">
						Expense Tracker
					</h1>
					{/* total balance */}
					<div className="flex justify-center items-center w-full mb-8  bg-slate-300 rounded-md pt-5 pb-4 dark:bg-gray-600 px-3">
						<div className="flex flex-col justify-center items-center min-w-full text-black dark:text-white">
							<span className="text-sm">Your Balance</span>
							<span className="text-2xl font-bold">
								Rp. {total.toLocaleString("id-ID")}
							</span>
							<div className="flex justify-between min-w-full px-3 pt-4">
								<div className="income bg-green-400 px-2 py-1 rounded">
									<span className="text-sm">Income: </span>
									<span className="text-sm font-bold">
										Rp.{" "}
										{totalIncome.toLocaleString("id-ID")}
									</span>
								</div>
								<div className="expense bg-red-400 px-2 py-1 rounded">
									<span className="text-sm">Expense: </span>
									<span className="text-sm font-bold">
										Rp.{" "}
										{totalExpense.toLocaleString("id-ID")}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="buttons">
						{/* modal btn */}
						<button
							className="bg-green-500 text-white px-4 py-2 rounded mb-4 mr-4 hover:bg-green-700"
							onClick={modalIncome.openModal}>
							Add Income
						</button>
						<button
							className="bg-red-500 text-white px-4 py-2 rounded mb-4 mr-4 hover:bg-red-700"
							onClick={modalExpense.openModal}>
							Add Expense
						</button>
					</div>
				</div>

				<div className="flex justify-start flex-col items-center md:border-l-2">
					<div className="hidden md:block">
						<h1 className="text-2xl font-bold mb-4 text-black dark:text-white">
							History
						</h1>
					</div>
					{expenses.length === 0 ? (
						<p className="text-black dark:text-white">
							Tidak ada data
						</p>
					) : (
						<ul className="overlow-container min-w-full pl-4 pr-0 md:pl-10 overflow-y-scroll max-h-[40rem] md:max-h-[45rem]">
							{expenses.map((expense, index) => (
								<div className="relative" key={index}>
									<span
										className={`text-sm absolute top-0 text-white left-1 px-2 rounded-e-md ${
											expense.category === "income"
												? " bg-green-400"
												: " bg-red-400"
										}`}>
										{expense.date}
									</span>
									<li
										key={expense.id}
										className={` flex justify-between items-center shadow-md  ${
											expense.category === "income"
												? "border-l-4 border-green-400"
												: "border-l-4 border-red-400"
										} text-black px-4 md:pb-4 pt-2 md:pt-6  rounded mb-4 mr-4 bg-slate-100 dark:bg-slate-500`}>
										<div className="flex justify-between items-center min-w-full">
											<span
												className={`font-bold  rounded-md px-2 py-1 text-white ${
													expense.category ===
													"income"
														? " bg-green-400"
														: " bg-red-400"
												}`}>
												{expense.category === "income"
													? "+"
													: "-"}{" "}
												Rp.{" "}
												{parseInt(
													expense.amount
												).toLocaleString("id-ID")}
											</span>

											<span
												className={`text-white rounded-md px-2 py-1 size-sm font-medium ${
													expense.category ===
													"income"
														? " bg-green-400"
														: " bg-red-400"
												}`}>
												{expense.description}
											</span>

											<div className="buttons flex flex-col md:flex-row justify-center items-end">
												<button
													onClick={() => {
														modalEdit.openModal();
														setIndex(index);
														setAmount(
															expense.amount
														);
														setDescription(
															expense.description
														);
														setDate(expense.date);
													}}
													className="bg-yellow-400 hover:bg-green-700 text-white font-bold py-2 px-3 rounded  mr-0 md:mr-2">
													<i className="fa-solid fa-pen-to-square"></i>
												</button>

												<button
													onClick={() =>
														deleteExpense(index)
													}
													className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-3 rounded">
													<i className="fa-solid fa-trash"></i>
												</button>
											</div>
										</div>
									</li>
								</div>
							))}
						</ul>
					)}
				</div>
			</div>
			{/* modals */}
			<Modal
				show={modalIncome.isOpen}
				title="Add Income"
				handleSubmit={addExpense}
				handleClose={modalIncome.closeModal}>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="amount">
						Amount
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
						id="amount"
						type="number"
						placeholder="Amount"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						required
					/>
					<label
						className="block text-gray-700 text-sm font-bold mb-2 mt-4"
						htmlFor="description">
						Description
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
						id="description"
						type="text"
						placeholder="Description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
					<label
						className="block text-gray-700 text-sm font-bold mb-2 mt-4"
						htmlFor="date">
						Date
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
						id="date"
						type="date"
						placeholder="Date"
						value={date || new Date().toISOString().slice(0, 10)}
						onChange={(e) => setDate(e.target.value)}
						required
					/>
				</div>
			</Modal>
			<Modal
				show={modalExpense.isOpen}
				title="Add Expense"
				handleSubmit={addExpense}
				handleClose={modalExpense.closeModal}>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="amount">
						Amount
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
						id="amount"
						type="number"
						placeholder="Amount"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						required
					/>
					{/* desc */}
					<label
						className="block text-gray-700 text-sm font-bold mb-2 mt-4"
						htmlFor="description">
						Description
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
						id="description"
						type="text"
						placeholder="Description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
					{/* date */}
					<label
						className="block text-gray-700 text-sm font-bold mb-2 mt-4"
						htmlFor="date">
						Date
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
						id="date"
						type="date"
						placeholder="Date"
						value={date || new Date().toISOString().slice(0, 10)}
						onChange={(e) => setDate(e.target.value)}
						required
					/>
				</div>
			</Modal>
			<Modal
				show={modalEdit.isOpen}
				title="Edit Expense"
				handleSubmit={(e) => editExpense(e, index)}
				handleClose={modalEdit.closeModal}>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="amount">
						Amount
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
						id="amount"
						type="number"
						placeholder="Amount"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						required
					/>
					{/* desc */}
					<label
						className="block text-gray-700 text-sm font-bold mb-2 mt-4"
						htmlFor="description">
						Description
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
						id="description"
						type="text"
						placeholder="Description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
					{/* date */}
					<label
						className="block text-gray-700 text-sm font-bold mb-2 mt-4"
						htmlFor="date">
						Date
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
						id="date"
						type="date"
						placeholder="Date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						required
					/>
				</div>
			</Modal>
		</div>
	);
}

export default Expense;

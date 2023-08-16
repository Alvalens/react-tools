const Modal = ({ children, title, show, handleSubmit, handleClose }) => {
	return (
		<div
			className={
				show
					? "modal show fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
					: "modal hidden"
			}>
			<form onSubmit={handleSubmit}>
				<div className="modal-content bg-gray-200 dark:bg-gray-400 w-96 rounded-lg shadow-lg">
					<div className="modal-header px-4 py-2  rounded-t-lg flex justify-between items-center border-b border-gray-500">
						<h4 className="modal-title text-lg font-semibold">
							{title === "Add Income" ? (
								<span className="bg-green-500 px-3 py-2 rounded text-white">
									Add Income
								</span>
							) : title === "Add Expense" ? (
								<span className="bg-red-500 px-3 py-2 rounded text-white">
									Add Expense
								</span>
							) : (
								<span className="bg-yellow-500 px-3 py-2 rounded text-white">
									Edit
								</span>
							)}
						</h4>
						<button
							className="close text-white px-4 py-2 bg-gray-400 dark:bg-gray-200 rounded hover:bg-red-700 hover:text-white dark:text-black"
							onClick={handleClose}>
							&times;
						</button>
					</div>
					<div className="modal-body p-4 ">{children}</div>
					<div className="modal-footer p-4  rounded-b-lg flex justify-end">
						<button
							className="btn bg-red-600 text-white px-4 py-2 rounded mr-2"
							onClick={handleClose}>
							Close
						</button>
						<button
							className="btn bg-green-600 text-white px-4 py-2 rounded"
							type="submit">
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Modal;

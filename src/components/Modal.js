const Modal = ({ children, title, show, handleSubmit, handleClose }) => {

	return (
		<div
			className={
				show
					? "modal fixed inset-0 flex items-center justify-center"
					: "modal hidden"
			}>
			<form onSubmit={handleSubmit}>
				<div className="modal-content bg-white w-96 rounded-lg shadow-lg">
					<div className="modal-header px-4 py-2 bg-gray-200 rounded-t-lg flex justify-between items-center">
						<h4 className="modal-title text-lg font-semibold">
							{title}
						</h4>
						<button
							className="close text-gray-600"
							onClick={handleClose}>
							&times;
						</button>
					</div>
					<div className="modal-body p-4">{children}</div>
					<div className="modal-footer p-4 bg-gray-200 rounded-b-lg flex justify-end">
						<button
							className="btn btn-danger mr-2"
							onClick={handleClose}>
							Close
						</button>
						<button className="btn btn-success" type="submit">
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Modal;

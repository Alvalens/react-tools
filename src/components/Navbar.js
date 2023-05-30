import '../css/Navbar.css'
function Navbar(props) {
	return (
		<div className="navbar">
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/#">Profile</a>
				</li>
				<li>
					<a href="/#"> {props.tes} </a>
				</li>
			</ul>
		</div>
	);
}
export default Navbar;
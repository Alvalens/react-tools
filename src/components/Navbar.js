import '../css/Navbar.css'
function Navbar(props) {
	return (
		<div className='navbar'>
			<ul>
				<li><a href="#"></a>Home</li>
				<li><a href="#"></a>About</li>
				<li><a href="#"></a>Profile</li>
				<li><a href="#"></a> {props.tes} </li>
			</ul>
		</div>
	);
}
export default Navbar;
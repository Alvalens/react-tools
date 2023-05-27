import logo from "../logo.svg";
import "../App.css";
import Button from "../components/myButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home() {
    function handleClick() {
		const logo = document.getElementById("logo");
		logo.classList.toggle("App-logo-rev");
	}

	const navText = "navbar";
	const clicked = () => {
		alert("clicked");
	};
	const foo = () => {
		return <i> ini footer</i>;
	};
	return (
		<div className="App">
			<header className="App-header">
				<Navbar tes={navText} />
				<img
					src={logo}
					className="App-logo"
					alt="logo"
					id="logo"
				/>
				<p>React test</p>
				<Button tes={clicked} />
				<button onClick={handleClick}>Change!</button>
			</header>
			<Footer var={foo} />
		</div>
	);
}

export default Home;

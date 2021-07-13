import logo from "./logo.png";
import "./App.css";
import { connect } from "react-redux";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Assignment</p>

				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
			</header>
		</div>
	);
}

export default connect()(App);

import logo from "./logo.png";
import "./App.css";
import { connect } from "react-redux";
import moment from "moment";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="Container">
					<img src={logo} className="App-logo" alt="logo" />
				</div>
			</header>
			<div className="Container">
				<div className="App-Content">
					<div className="Info">
						<p>
							TODO Assignment
						</p>
						<p>
							Current time: {moment().format('LLLL')}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default connect()(App);

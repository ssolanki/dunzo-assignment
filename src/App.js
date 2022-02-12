import logo from "./logo.png";
import "./App.css";
import { connect } from "react-redux";
// import moment from "moment";
import placeHolderImg from "./assets/images/placeholder.png"

// Note: use moment for formatting date like moment().format('LLLL')

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
						<img alt="placeholder" className="Placeholder" src={placeHolderImg} />
						<p className="PlaceholderTitle">
							Start creating your first task!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default connect()(App);

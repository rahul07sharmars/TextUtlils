import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";

import {
	BrowserRouter as Router,
	Switch,
	Link,
	Routes,
	Route,
} from 'react-router-dom';

function App() {
	const [mode, setMode] = useState("dark");
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {};
	// document.body.style.backgroundColor = 'grey';
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#3f6c95";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
		}
	};
	return (
		<div className="App">
			<React.Fragment>
				<Router>
					<Navbar
						title="TextUtils"
						home="Home"
						about="About Us"
						mode={mode}
						toggleMode={toggleMode}
					/>
					{/*we should always use exact as react does partial matching */}
					<div className="container my-3">
						<Routes>
							<Route exact path="/about" element={<About />} />
							<Route exact path="/textform" element={<Textform />} />
						</Routes>
					</div>
					<Alert alert="this is alert" />
				</Router>
			</React.Fragment>
		</div>
	);
}

export default App;

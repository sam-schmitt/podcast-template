import "./App.css";
import Header from "./components/important/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home/home";
import About from "./screens/about/about";
import { useStyles } from "./styles/appStyles";
import BetterHeader from "./components/important/header/betterHeader";

function App() {
	const { app } = useStyles();
	return (
		<div className={app}>
			<Router>
				<BetterHeader />
				<Routes>
					<Route path='/about' element={<About />} />

					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

// import './index.css';
import Home from "./views/Home";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

function App() {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
}

export default App;

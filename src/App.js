// import './index.css';
import Home from "./views/Home";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "src/redux/store";
import Router from "./router";

function App() {
	return (
		<Provider store={store().store}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</Provider>
	);
}

export default App;

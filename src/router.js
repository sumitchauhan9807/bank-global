import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Users from "./views/Users";
import SendMail from "./views/SendMail";
import SuccessPage from './views/SuccessPage'

function Router() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/users" element={<Users />} />
				<Route exact path="/mail" element={<SendMail />} />
				<Route exact path="/success" element={<SuccessPage />} />

			</Routes>
		</>
	);
}

export default Router;

import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Users from "./views/Users";
import SendMail from "./views/SendMail";

function Router() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/users" element={<Users />} />
				<Route exact path="/mail" element={<SendMail />} />

			</Routes>
		</>
	);
}

export default Router;

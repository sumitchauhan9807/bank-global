import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Users from "./views/Users";

function Router() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/users" element={<Users />} />
			</Routes>
		</>
	);
}

export default Router;

import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { lazy } from 'react';
import Home from "./views/Home";
import Users from "./views/Protected/Users";
import SendMail from "./views/SendMail";
import SuccessPage from './views/SuccessPage'

const Login = lazy(() => import('./views/Login'));

function Router() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/users" element={<Users />} />
				<Route exact path="/mail" element={<SendMail />} />
				<Route exact path="/success" element={<SuccessPage />} />
				<Route exact path="/login" element={<Login />} />
			</Routes>
		</>
	);
}

export default Router;

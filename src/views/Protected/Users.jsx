import { useEffect, useState } from "react";
import useAxios from "src/Hooks/UseAxios";
import axios from "src/axios";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logOut } from 'src/redux/admin'
import { useDispatch } from "react-redux";
function Users() {
	const dispatch = useDispatch()
	const adminData = useSelector((state) => {
		if (state._persist.rehydrated) {
			return state.admin;
		}
	});
	const navigate = useNavigate();
	console.log(adminData, "Adafsdfsdf");
	useEffect(() => {
		if (adminData) {
			if(!adminData.token){ 
				navigate('/')
			}
		}
	}, [adminData]);

	const [data, setData] = useState({});

	const { response, loading, error } = useAxios({
		method: "get",
		url: `user`,
	});

	const out = () => {
		dispatch(logOut());
		navigate('/')
	}

	const deleteAll = async () => {
		try {
			let text = "Are you sure ? All data will be lost";
			if (window.confirm(text) == true) {
				const { data } = await axios.delete("user");
				window.location.reload();
			} else {
			}
		} catch (e) {
			alert(e);
		}
	};
	useEffect(() => {
		console.log(response);

		if (response !== null) {
			setData(response);
		}
	}, [response]);
	if (!response?.message) return;
	return (
		<>
			<div class="container">
				<h2>All Users</h2>
				<table class="table">
					<thead>
						<tr>
							<th>Email</th>
							<th>OTP</th>
							<th>Token</th>
							<th>Phonenumber</th>
						</tr>
					</thead>
					<tbody>
						{response.user.map((data) => {
							return (
								<tr>
									<td>{data.email}</td>
									<td>{data.otp}</td>
									<td>{data.token}</td>
									<td>{data.phonenumber}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<button onClick={deleteAll} type="button" class="btn btn-danger">
					Flush All Entries
				</button>
				<button onClick={out} style={{marginLeft:"4px"}}  type="button" class="btn btn-danger">
					Logout
				</button>
			</div>
		</>
	);
}
export default Users;

import { useEffect, useState } from "react";
import useAxios from "src/Hooks/UseAxios";

function Users() {
	const [data, setData] = useState({});

	const { response, loading, error } = useAxios({
		method: "get",
		url: `user`,
	});
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
			</div>
		</>
	);
}
export default Users;

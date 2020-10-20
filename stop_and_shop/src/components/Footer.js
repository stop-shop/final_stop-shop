import React from 'react';
import '../css/style.css';

import { FaGithub, FaEnvelope, FaFacebook } from "react-icons/fa";



function Footer() {

	return (
		<React.Fragment>

			<footer className="footer-distributed">
				<div className="footer-left">
					<h3>Stop <span>And</span> Shop</h3>
					<p className="footer-links">
						<a href="/">Home </a>
					·
					<a href="#">Goods </a>
					·
					<a href="#">Services </a>
					·
				</p>
					<p className="footer-company-name">Stop And Shop © 2020</p>
					<div className="footer-icons">
						<a href="#"><FaGithub /></a>
						<a href="#"><FaEnvelope /></a>
						<a href="#"><FaFacebook /></a>

					</div>
				</div>
				<div className="footer-right">
					<p>Contact Us</p>
					<form action="#" method="post">
						<input type="text" name="email" placeholder="Email" />
						<textarea name="message" placeholder="Message"></textarea>
						<button>Send</button>
					</form>
				</div>
			</footer>
		</React.Fragment>
	);
}

export default Footer;

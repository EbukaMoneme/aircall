import React from "react";

const Footer = (props) => {
	return (
		<div className="footer">
			<i className="fas fa-phone call-link"></i>
			<i className="far fa-user"></i>
			<svg className="dialpad" width="50px" height="50px" viewBox="-10 0 40 20" xmlns="http://www.w3.org/2000/svg">
				<path d="M5 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM5 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
			</svg>
			<i className="fas fa-cog"></i>
			<i className="fas fa-record-vinyl"></i>
		</div>
	)
}

export default Footer;
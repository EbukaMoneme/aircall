import React from "react";
const createDateElement = (date) => {
	return (
		<div className="date" key={Math.random()}>
			<hr className="date-line"/>
			<p>{date}</p>
			<hr className="date-line"/>
		</div>
	)
}

export default createDateElement;
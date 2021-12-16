import React from "react";
import CallsItem from "./CallsItem.jsx";

const CallsList = (props) => {
	const { calls } = props; 

	const parsedCallsList = calls.map((call, index) => <CallsItem {...call} key={index} />);

	return (
		<div className="calls-list">
			{parsedCallsList}
		</div>
	)
}

export default CallsList;
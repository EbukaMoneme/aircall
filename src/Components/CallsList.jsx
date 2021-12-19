import React from "react";
// Components
import CallsItem from "./CallsItem.jsx";
// Helpers
import listCalls from "../Helpers/listCalls.js";
import callView from "../Helpers/callView";
import createDateElement from "../Helpers/createDateElement.js";
import formatDate from "../Helpers/formatDate.js";

const CallsList = (props) => {
	const { calls, view, setState } = props;

	// Filter calls by view
	const filteredCalls = callView(view, calls)

	const uniqueDates = [...new Set(filteredCalls.map(call => formatDate(call.created_at)))]
	const parsedCallsList = filteredCalls.map(call => {
		return <CallsItem {...call} setState={setState} calls={calls} key={calls.indexOf(call)} />
	});

	const list = listCalls(uniqueDates, parsedCallsList, formatDate, createDateElement)

	return (
		<div className="calls-list">
			{list}
			<div className="space"/>
		</div>
	)
}

export default CallsList;
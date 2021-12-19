import React from "react";
import CallsItem from "./CallsItem.jsx";
import moment from 'moment';

const CallsList = (props) => {
	const { calls, view, setState } = props;

	const callView = (view) => {
		let filter;
		if (view == 'regular') {
			filter = calls.filter(call => !call.is_archived)
		}
		if (view == 'archived') {
			filter = calls.filter(call => call.is_archived)
		}
		if (view == 'missed') {
			filter = calls.filter(call => call.call_type === 'missed' && !call.is_archived)
		}
		return filter;
	}
	const filteredCalls = callView(view)

	const formatDate = (date) => {
		return moment(date).format("ll")
	}
	
	const uniqueDates = [...new Set(filteredCalls.map(call => formatDate(call.created_at)))]
	const parsedCallsList = filteredCalls.map(call => <CallsItem {...call} setState={setState} calls={calls} key={calls.indexOf(call)} />);

	const createDateElement = (date) => {
		return (
			<div className="date" key={Math.random()}>
				<hr className="date-line"/>
				<p>{date}</p>
				<hr className="date-line"/>
			</div>
		)
	}

	const listCalls = () => {
		let list = [];
	
		for (let date of uniqueDates) {
			list.push(createDateElement(date))
			let dateFilteredCalls = parsedCallsList.filter(call => formatDate(call.props.created_at) == date)

			list.push(dateFilteredCalls)
		}
		return list;
	}
	const list = listCalls()

	return (
		<div className="calls-list">
			{list}
			<div className="space"/>
		</div>
	)
}

export default CallsList;
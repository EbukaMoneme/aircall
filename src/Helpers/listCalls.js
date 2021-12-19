const listCalls = (dates, calls, formatDate, createDate) => {
	let list = [];

	for (let date of dates) {
		list.push(createDate(date))
		let dateFilteredCalls = calls.filter(call => formatDate(call.props.created_at) == date)

		list.push(dateFilteredCalls)
	}
	return list;
}

export default listCalls;
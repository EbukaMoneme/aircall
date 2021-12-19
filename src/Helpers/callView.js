const callView = (view, calls) => {
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

export default callView;
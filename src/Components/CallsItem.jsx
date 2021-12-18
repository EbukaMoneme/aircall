import React from 'react';
import moment from 'moment';
import Options from './Buttons/Options.jsx';
import axios from 'axios';

const CallsItem = (props) => {
	const { 
		call_type, 
		created_at, 
		direction, 
		duration, 
		from, 
		id, 
		is_archived, 
		to, 
		via, 
		calls, 
		setState 
	} = props;

	console.log(props.is_archived)
	const time = moment(created_at).format('LT').split(' ');

	const archiveCall = () => {
		console.log(calls)
		const toArchive = calls.filter(call => call.id === id)[0]
		const index = calls.indexOf(toArchive);

		const alteredCall = [...calls][index]
		alteredCall.is_archived = !alteredCall.is_archived;
		const alteredCalls = calls;
		alteredCalls[index] = alteredCall

		setState(prev => ({...prev, calls: alteredCalls}));
		updateCall(!is_archived)
	}

	const updateCall = (archive_status) => {
		axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, {
			is_archived: archive_status
		})
			.then((res) => {
				console.log(res)
			})
			.catch(err => console.log("Failed because:", err))
	}

	return (
		<div className='calls-item'>
			<div className='call'>
				<div className='call-direction'>
					<i className="fas fa-phone call-icon"></i>
					<div className='callers'>
						<p>{from}</p>
						<p>{to}</p>
					</div>
				</div>
				<div className='call-end'>
					<Options is_archived={is_archived} archiveCall={archiveCall}/>
					<div className='time'>{time[0]}</div>
					<div className='am-pm'>{time[1]}</div>
				</div>
			</div>

			{/* Type: {call_type}
			<br></br>
			Created: {created_at}
			<br></br>
			Direction: {direction}
			<br></br>
			Duration: {duration}
			<br></br>
			From: {from}
			<br></br>
			ID: {id}
			<br></br>
			Is_Archived: {props.is_archived}
			<br></br>
			To: {to}
			<br></br>
			via: {via}	 */}

		</div>
	)
}

export default CallsItem;
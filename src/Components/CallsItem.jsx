import React from 'react';
import moment from 'moment';

const CallsItem = (props) => {
	const { call_type, created_at, direction, duration, from, id, is_archived, to, via } = props;
	console.log(props.is_archived)
	const time = moment(created_at).format('LT').split(' ');
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
					<i className="fas fa-ellipsis-v options"></i>
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
import React from "react";
import moment from 'moment';

const CallDetails = (props) => {
	const { 
		call_type, 
		created_at, 
		direction, 
		duration, 
		id,
		via
	} = props.props;

	const time = moment(created_at).format('LT').split(' ');

	return (
		<div className='call-detail'>
			<div className='detail-header'>
				<p className='call-id'>
					Call ID: {id}
					{ direction === 'outbound' && <img className="direction" src="https://img.icons8.com/ios/50/000000/outgoing-call.png"/>}
					{ direction === 'inbound' && <img className="direction" src="https://img.icons8.com/ios/48/000000/incoming-call.png"/>}
				</p>
				<i className="far fa-times-circle"  style={{color: 'red'}} onClick={() => props.setDisplayDetails(false)}></i>
			</div>
			<div className='detail-content'>
				<div className='detail-item'>
					{ call_type === 'missed' && <p style={{backgroundColor: 'red'}} className='call-status'>Missed Call</p> }
					{ call_type === 'voicemail' && <p style={{backgroundColor: 'gray'}} className='call-status'>Voicemail</p> }
					{ direction === 'outbound' && call_type !== 'voicemail'&& call_type !== 'missed' && <p style={{backgroundColor: 'green'}} className='call-status'>Outbound Call</p> }
					{ direction === 'inbound' && call_type !== 'voicemail'&& call_type !== 'missed' && <p style={{backgroundColor: 'blue'}} className='call-status'>Inbound Call</p> }
					<div className='detail-date'>
						<p>{moment(created_at).format('ll')}</p>
						<p>{time}</p>
					</div>
				</div>
				<div className='detail-item'>
					<p>Duration: {duration} minutes</p>
					<p>Via: {via}</p>
				</div>
			</div>
		</div>
	)
};

export default CallDetails;
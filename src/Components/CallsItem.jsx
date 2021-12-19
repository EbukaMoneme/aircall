import React, { useState } from 'react';
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

	const [displayDetails, setDisplayDetails] = useState(false)

	const toggleDetails = () => {
		setDisplayDetails(!displayDetails)
	}

	const time = moment(created_at).format('LT').split(' ');

	const archiveCall = () => {
		setDisplayDetails(false)
		const toArchive = calls.filter(call => call.id === id)[0];
		const index = calls.indexOf(toArchive);

		const alteredCall = [...calls][index];
		alteredCall.is_archived = !alteredCall.is_archived;
		const alteredCalls = calls;
		alteredCalls[index] = alteredCall;

		setState(prev => ({...prev, calls: alteredCalls}));
		updateCall(!is_archived);
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
					{call_type === 'answered' && <i style={{color: 'green'}} className="fas fa-phone call-icon"></i>}
					{call_type === 'missed' && <i style={{color: 'red'}} className="fas fa-phone-slash call-icon"></i>}
					{call_type === 'voicemail' && <i className="fas fa-voicemail call-icon"></i>}
					<div className='callers'>
						<p className='sender'>{from}</p>
						{call_type == 'answered' && <p className='receiver'>called <span>{to}</span></p> }
						{call_type == 'missed' && <p className='receiver'>tried to call <span>{to}</span></p> }
					</div>
				</div>
				<div className='call-end'>
					<Options is_archived={is_archived} archiveCall={archiveCall} toggleDetails={toggleDetails}/>
					<div className='time'>{time[0]}</div>
					<div className='am-pm'>{time[1]}</div>
				</div>
			</div>
			{ displayDetails && 
			<div className='call-detail'>
				<div className='detail-header'>
					<p className='call-id'>
						Call ID: {id}
						{ direction === 'outbound' && <img className="direction" src="https://img.icons8.com/ios/50/000000/outgoing-call.png"/>}
						{ direction === 'inbound' && <img className="direction" src="https://img.icons8.com/ios/48/000000/incoming-call.png"/>}
					</p>
					<i className="far fa-times-circle"  style={{color: 'red'}} onClick={() => setDisplayDetails(false)}></i>
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
				Is_Archived: {props.is_archived}
				<br></br>
				To: {to}
				<br></br>
				via: {via}	 */}
			</div>
			}
			

		</div>
	)
}

export default CallsItem;
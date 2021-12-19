import React, { useState } from 'react';
import moment from 'moment';
import Options from './Buttons/Options.jsx';
import CallDetails from './CallDetails.jsx';
import useDisplayDetails from '../Hooks/useDisplayDetails.js';
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

	const { displayDetails, setDisplayDetails, toggleDetails} = useDisplayDetails();

	const time = moment(created_at).format('LT').split(' ');

	const archiveCall = () => {
		setDisplayDetails(false)
		// filter for specific call
		const toArchive = calls.filter(call => call.id === id)[0];
		// find index of call
		const index = calls.indexOf(toArchive);
		// spread call and alter is_archived status
		const alteredCall = [...calls][index];
		alteredCall.is_archived = !alteredCall.is_archived;
		// insert altered call back into spread calls list
		const alteredCalls = [...calls];
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
			{displayDetails && <CallDetails props={props} setDisplayDetails={setDisplayDetails}/>}
		</div>
	)
}

export default CallsItem;
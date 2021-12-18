import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function Options(props) {
	const { is_archived, archiveCall } = props;
	const menuRef = useRef(null);
	const [listening, setListening] = useState(false);
	const [isActive, setisActive] = useState(false);
	const toggleOptions = () => {
		setisActive(!isActive)
	}

	const listenForClicks = useCallback(() => {
		if (listening) return;
  	if (!menuRef.current) return;
  	setListening(true);
		
	}, [setListening, listening, isActive, setisActive])

	useEffect(() => {
		document.addEventListener(`click`, (evt) => {
			if (menuRef.current && menuRef.current.contains(evt.target)) return;
			setisActive(false);
  	});
		return () => document.removeEventListener('click', setListening)
	}, [setListening, listening, menuRef, isActive]);


	return (
		<div 
				ref={menuRef}
				className='options'
				onClick={toggleOptions}
			>
				<i className="fas fa-ellipsis-v options-icon"></i>

				{isActive && 
					<div className='dropdown' >
						{ is_archived && <button className="archive" onClick={archiveCall}>Unarchive</button>}
						{ !is_archived && <button className="archive" onClick={archiveCall}>Archive</button>}
					</div>
					
				}
			</div>
	)
}

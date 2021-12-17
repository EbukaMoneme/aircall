import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function Options(props) {
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
		
	})
	useEffect(() => {
		document.addEventListener(`click`, (evt) => {
			if (menuRef.current && menuRef.current.contains(evt.target)) return;
			setisActive(false);
  	});
		return () => document.removeEventListener('click', (evt) => {

		})
	}, [setListening, listening, menuRef, isActive]);

	return (
		<div 
				ref={menuRef}
				className=''
				onClick={toggleOptions}
			>
				<i className="fas fa-ellipsis-v options"></i>

				{isActive && 
					<div className={``} >
						<button className="">Archive</button>
					</div>
				}
			</div>
	)
}

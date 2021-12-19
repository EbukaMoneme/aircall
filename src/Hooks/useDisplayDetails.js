import { useState } from 'react';

const useDisplayDetails = () => {
	const [displayDetails, setDisplayDetails] = useState(false)

	const toggleDetails = () => {
		setDisplayDetails(!displayDetails)
	}

	return { displayDetails, setDisplayDetails, toggleDetails };
}

export default useDisplayDetails;
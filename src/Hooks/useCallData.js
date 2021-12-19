import { useEffect, useState } from 'react';
import axios from 'axios';

const useCallData = () => {
	const [state, setState] = useState({
		calls: []
	});
	
	useEffect(() => {
		axios.get('https://aircall-job.herokuapp.com/activities')
			.then((res) => {
				setState((prev) => ({
					...prev, calls: [...res.data]
				}));
			});
	}, []);

	return { state, setState };
}

export default useCallData;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CallsList from './Components/CallsList.jsx';

import Header from './Header.jsx';

const App = () => {
	const [state, setState] = useState({
		calls: [],
		archived_calls: []
	})

	useEffect(() => {
		axios.get('https://aircall-job.herokuapp.com/activities')
			.then((res) => {
				setState(() => ({
					calls: [...res.data], archived_calls: []
				}))
			})
	}, [])


  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
				{/* Some activities should be here */}
				<CallsList calls={state.calls}/>
			</div>
    </div>
  );
};



export default App;

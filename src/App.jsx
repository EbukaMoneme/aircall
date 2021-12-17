import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
				<Routes>
					<Route path="/" element={<CallsList calls={state.calls} view={'regular'}/>} />
					<Route path="/missed" element={<CallsList calls={state.calls} view={'missed'}/>} />
					<Route path="/archived" element={<CallsList calls={state.calls} view={'archived'}/>} />
				</Routes>
			</div>
    </div>
  );
};



export default App;

import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import CallsList from './Components/CallsList.jsx';

import Header from './Header.jsx';

const App = () => {
	const [state, setState] = useState({
		calls: []
	})

	useEffect(() => {
		axios.get('https://aircall-job.herokuapp.com/activities')
			.then((res) => {
				setState((prev) => ({
					...prev, calls: [...res.data]
				}))
			})
	}, [])


  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
				<Routes>
					<Route path="/" element={<CallsList setState={setState} calls={state.calls} view={'regular'}/>} />
					<Route path="/missed" element={<CallsList setState={setState} calls={state.calls} view={'missed'}/>} />
					<Route path="/archived" element={<CallsList setState={setState} calls={state.calls} view={'archived'}/>} />
				</Routes>
			</div>
    </div>
  );
};



export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import useCallData from './Hooks/useCallData.js';

import CallsList from './Components/CallsList.jsx';
import Footer from './Components/Footer.jsx';
import Header from './Header.jsx';

const App = () => {
	const { state, setState } = useCallData();

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
			<Footer/>
    </div>
  );
};

export default App;

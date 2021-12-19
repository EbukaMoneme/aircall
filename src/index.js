import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import './css/body.css';
import './css/app.css';
import './css/header.css';
import './css/calls-item.css';
import './css/calls-list.css';
import './css/footer.css';

import App from './App.jsx';

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<App/>
		</React.StrictMode>
	</Router>,
	document.getElementById('app')
);
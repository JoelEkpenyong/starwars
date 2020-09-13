import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './dashboard/dashboard';
import SignUp from './signUp/signUp';

function App() {
	return (
		<Router>
			<div className="App">
				<Route path="/" exact component={SignUp} />
				<Route path="/dashboard" component={Dashboard} />
			</div>
		</Router>
	);
}

export default App;

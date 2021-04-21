import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { configStore } from '../store';
import Navbar from './Navbar';
import Main from './Main';
import {
	setAuthorizationToken,
	setCurrentUer
} from '../store/actions/auth';
import jwtDecode from 'jwt-decode';

const store = configStore();

if (localStorage.jwtToken) {
	setAuthorizationToken(localStorage.jwtToken);
	try {
		store.dispatch(
			setCurrentUer(jwtDecode(localStorage.jwtToken))
		);
	} catch (err) {
		store.dispatch(setCurrentUer({}));
	}
}

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className="onboarding">
					<Navbar />
					<Main />
				</div>
			</Router>
		</Provider>
	);
};

export default App;

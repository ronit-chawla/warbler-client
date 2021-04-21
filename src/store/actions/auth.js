import {
	apiCall,
	setTokenHeader
} from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './error';

export const setCurrentUer = user => {
	return {
		type : SET_CURRENT_USER,
		user
	};
};

export const setAuthorizationToken = token => {
	setTokenHeader(token);
};
export const logout = () => dispatch => {
	localStorage.clear();
	setAuthorizationToken(false);
	dispatch(setCurrentUer({}));
};

export const authUser = (type, userData) => {
	return dispatch =>
		new Promise((resolve, reject) => {
			return apiCall(
				'post',
				`/api/auth/${type}`,
				userData
			)
				.then(({ token, ...user }) => {
					localStorage.setItem('jwtToken', token);
					setAuthorizationToken(token);
					dispatch(setCurrentUer(user));
					dispatch(removeError());
					resolve();
				})
				.catch(err => {
					dispatch(addError(err.message));
					reject();
				});
		});
};

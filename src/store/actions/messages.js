import { apiCall } from '../../services/api';
import { addError } from './error';
import {
	LOAD_MESSAGES,
	REMOVE_MESSAGE
} from '../actionTypes';

export const loadMessages = messages => ({
	type     : LOAD_MESSAGES,
	messages
});

export const remove = id => ({
	type : REMOVE_MESSAGE,
	id
});

export const fetchMessages = () => dispatch =>
	apiCall('get', `/api/messages`)
		.then(res => dispatch(loadMessages(res)))
		.catch(err => dispatch(addError(err.message)));

export const postNewMessage = text => (
	dispatch,
	getState
) => {
	const { id } = getState().currentUser.user;
	return apiCall('post', `/api/users/${id}/messages`, {
		text
	})
		.then(res => {})
		.catch(err => dispatch(addError(err.message)));
};

export const removeMessage = (
	user_id,
	msg_id
) => dispatch =>
	apiCall(
		'delete',
		`/api/users/${user_id}/messages/${msg_id}`
	)
		.then(res => dispatch(remove(msg_id)))
		.catch(err => dispatch(addError(err.message)));

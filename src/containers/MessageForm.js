import React from 'react';
import { connect } from 'react-redux';
import { postNewMessage } from '../store/actions/messages';
import useInputState from '../hooks/useInputState';

const MessageForm = ({
	errors,
	postNewMessage,
	history
}) => {
	const [
		message,
		setMessage,
		resetMessage
	] = useInputState();
	const handleNewMessage = e => {
		e.preventDefault();
		postNewMessage(message);
		resetMessage();
		history.push('/');
	};
	return (
		<form
			onSubmit={handleNewMessage}
			className="container"
		>
			<h2 className="heading-2 text-center my-3">
				Create A New Message
			</h2>
			{errors.message && (
				<div className="alert alert-danger">
					{errors.message}
				</div>
			)}
			<input
				type="text"
				className="form-control"
				value={message}
				onChange={setMessage}
			/>
			<button className="btn btn-primary btn-block mt-3">
				Add Message
			</button>
		</form>
	);
};

const mapStateToProps = state => ({ errors: state.errors });

export default connect(mapStateToProps, { postNewMessage })(
	MessageForm
);

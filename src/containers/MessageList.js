import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
	fetchMessages,
	removeMessage
} from '../store/actions/messages';
import MessageItem from '../components/MessageItem';

const MessageList = ({
	fetchMessages,
	messages,
	removeMessage,
	currentUser
}) => {
	useEffect(() => {
		fetchMessages();
	});
	const handleRemove = (user_id, msg_id) => {
		return e => {
			removeMessage(user_id, msg_id);
		};
	};
	return (
		<div className="row col-sm-8">
			<div className="offset-1 col-sm-10">
				<ul className="list-group" id="messages">
					{messages.length > 0 ? (
						messages.map(m => {
							return (
								<MessageItem
									key={m._id}
									date={m.createdAt}
									text={m.text}
									username={
										m.user.username
									}
									profilePic={
										m.user.profilePic
									}
									removeMessage={handleRemove(
										m.user._id,
										m._id
									)}
									isCorrectUser={
										currentUser ===
										m.user.username
									}
								/>
							);
						})
					) : (
						<h1 className="heading-2">
							No Messages Yet
						</h1>
					)}
				</ul>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	messages    : state.messages,
	currentUser : state.currentUser.user.username
});

export default connect(mapStateToProps, {
	fetchMessages,
	removeMessage
})(MessageList);

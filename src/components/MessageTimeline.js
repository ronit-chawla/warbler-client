import React from 'react';
import MessageList from '../containers/MessageList';
import UserAside from './UserAside';

const MessageTimeline = ({ profilePic, username }) => {
	return (
		<div className="row">
			<UserAside
				profilePic={profilePic}
				username={username}
			/>
			<MessageList />
		</div>
	);
};

export default MessageTimeline;

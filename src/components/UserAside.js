import React from 'react';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const UserAside = ({ profilePic, username }) => (
	<div
		className="card"
		style={{ width: '18rem', padding: '1rem' }}
	>
		<img
			src={profilePic || DefaultProfileImg}
			className="card-img-top"
			alt={username}
		/>
		<div className="card-body">
			<h5 className="card-title">{username}</h5>
		</div>
	</div>
);

export default UserAside;

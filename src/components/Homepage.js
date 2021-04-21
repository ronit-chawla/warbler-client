import React from 'react';
import { Link } from 'react-router-dom';
import MessageTimeline from './MessageTimeline';

const Homepage = ({ currentUser }) =>
	!currentUser.isAuthenticated ? (
		<div className="home-hero">
			<h1>What's Happening?</h1>
			<h4>New To Warbler?</h4>
			<Link to="signup" className="btn btn-primary">
				Sign Up Here
			</Link>
		</div>
	) : (
		<MessageTimeline
			profilePic={currentUser.user.profilePic}
			username={currentUser.user.username}
		/>
	);

export default Homepage;

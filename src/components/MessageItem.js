import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const MessageItem = ({
	date,
	profilePic,
	username,
	text,
	removeMessage,
	isCorrectUser
}) => (
	<div
		className="card mb-3"
		style={{ maxWidth: '50rem' }}
	>
		<h5 className="card-header">
			<Link to="/">@{username}</Link>
		</h5>
		<div className="row no-gutters">
			<div className="col-md-4">
				<img
					src={profilePic || DefaultProfileImg}
					className="card-img-top timeline-image"
					alt={username}
				/>
			</div>
			<div className="col-md-8">
				<div className="card-body">
					<p className="card-text">{text}</p>
					<p className="card-text">
						<small className="text-muted">
							<Moment
								className="text-muted"
								format="DD/MM/YYYY"
							>
								{date}
							</Moment>
						</small>
					</p>
					{isCorrectUser && (
						<button
							onClick={removeMessage}
							className="btn btn-danger"
						>
							Delete
						</button>
					)}
				</div>
			</div>
		</div>
	</div>
);

export default MessageItem;

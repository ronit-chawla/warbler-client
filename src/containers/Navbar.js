import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth'

import logo from '../images/warbler-logo.png';

const Navbar = ({ currentUser,logout }) => {
	const handleLogout = e=>{
		e.preventDefault();
		logout()
	}
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark mb-1">
			<Link className="navbar-brand" to="/">
				<img
					src={logo}
					alt="logo"
					role="presentation"
				/>
				<p className="heading-6 mb-0">Warbler</p>
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent"
			>
				{currentUser.isAuthenticated ? (
					<ul className="navbar-nav ml-auto">
						<li className="mr-2">
							<Link
								to={`/users/${currentUser
									.user.id}/messages/new`}
							>
								New Message
							</Link>
						</li>
						<li className="mr-2">
							<a onClick={handleLogout} href="/">Logout</a>
						</li>
					</ul>
				) : (
					<ul className="navbar-nav ml-auto">
						<li className="mr-2">
							<Link to="/signup">
								Sign Up
							</Link>
						</li>
						<li className="mr-2">
							<Link to="/signin">Login</Link>
						</li>
					</ul>
				)}
			</div>
		</nav>
	);
};

const mapStateToProps = state => {
	return {
		currentUser : state.currentUser
	};
};

export default connect(mapStateToProps, {logout})(Navbar);

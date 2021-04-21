import React from 'react';
import {
	Switch,
	Route,
	withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/error';
import withAuth from '../hocs/withAuth';
import MessageForm from '../containers/MessageForm';

const Main = props => {
	const {
		authUser,
		errors,
		removeError,
		currentUser
	} = props;
	return (
		<div className="container">
			<Switch>
				<Route
					exact
					path="/"
					render={props => (
						<Homepage
							{...props}
							currentUser={currentUser}
						/>
					)}
				/>
				<Route
					exact
					path="/signin"
					render={props => {
						return (
							<AuthForm
								removeError={removeError}
								{...props}
								btnText="Log In"
								heading="Welcome Back"
								onAuth={authUser}
								errors={errors}
							/>
						);
					}}
				/>
				<Route
					exact
					path="/signup"
					render={props => {
						return (
							<AuthForm
								removeError={removeError}
								{...props}
								btnText="Sign Up"
								heading="Join Warbler Today"
								signUp
								onAuth={authUser}
								errors={errors}
							/>
						);
					}}
				/>
				<Route
					path="/users/:id/messages/new"
					component={withAuth(MessageForm)}
				/>
			</Switch>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		currentUser : state.currentUser,
		errors      : state.errors
	};
};

export default withRouter(
	connect(mapStateToProps, { authUser, removeError })(
		Main
	)
);

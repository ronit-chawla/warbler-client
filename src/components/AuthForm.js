import React from 'react';
import useInputState from '../hooks/useInputState';

const AuthForm = ({
	btnText,
	heading,
	signUp,
	onAuth,
	errors,
	removeError,
	history
}) => {
	const [
		email,
		setEmail,
		resetEmail
	] = useInputState();
	const [
		username,
		setUsername,
		resetUsername
	] = useInputState();
	const [
		password,
		setPassword,
		resetPassword
	] = useInputState();
	const [
		profilePic,
		setProfilePic,
		resetProfilePic
	] = useInputState();

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const authType = signUp ? 'signup' : 'signin';
			await onAuth(authType, {
				email,
				password,
				username,
				profilePic
			});
			history.push('/');
			resetEmail();
			resetPassword();
			resetProfilePic();
			resetUsername();
		} catch (err) {
			return;
		}
	};

	history.listen(() => {
		removeError();
	});
	return (
		<div>
			<div className="row justify-content-md-center text-center">
				<div className="col-md-6">
					<form onSubmit={handleSubmit}>
						<h2 className="heading-1">
							{heading}
						</h2>
						{errors.message && (
							<div className="alert alert-danger">
								{errors.message}
							</div>
						)}

						<label htmlFor="email">Email</label>
						<input
							className="form-control"
							type="email"
							id="email"
							value={email}
							onChange={setEmail}
						/>

						<label htmlFor="password">
							Password
						</label>
						<input
							className="form-control"
							type="password"
							id="password"
							onChange={setPassword}
						/>
						{signUp && (
							<div>
								<label htmlFor="username">
									Username
								</label>
								<input
									className="form-control"
									id="username"
									value={username}
									onChange={setUsername}
								/>

								<label htmlFor="profilePic">
									Profile Pic URL
								</label>
								<input
									className="form-control"
									id="profilePic"
									value={profilePic}
									onChange={setProfilePic}
								/>
							</div>
						)}
						<button className="btn btn-primary btn-block mt-4">
							{btnText}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AuthForm;

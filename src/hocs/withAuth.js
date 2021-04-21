import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const withAuth = ComponentToBeRendered => {
	// class Authenticate extends Component {
	// 	componentDidMount() {
	// 		if (!this.props.isAuthenticated) {
	// 			this.props.history.push('/signin');
	// 		}
	// 	}

	// 	componentDidUpdate() {
	// 		if (!this.props.isAuthenticated) {
	// 			this.props.history.push('/signin');
	// 		}
	// 	}
	// 	render() {
	// 		return (
	// 			<ComponentToBeRendered {...this.props} />
	// 		);
	// 	}
	// }
	const Authenticate = props => {
		useEffect(() => {
			if (!props.isAuthenticated) {
				props.history.push('/signin');
			}
		});
		return <ComponentToBeRendered {...props} />;
	};
	const mapStateToProps = state => ({
		isAuthenticated : state.currentUser.isAuthenticated
	});
	return connect(mapStateToProps)(Authenticate);
};

export default withAuth;

import React from 'react';
import {
	bindActionCreators
} from 'redux';
import {
	connect
} from 'react-redux';
import LoginForm from './../components/LoginForm';
import * as userAction from '../actions/user';

class Login extends React.Component {
	render() {
		const actions = this.props.actions

		return (
			<LoginForm onLoginSubmit={actions.onLoginSubmit} />
		);
	}
}

const mapStateToProps = (state) => {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userAction, dispatch)
	}
}

module.exports = connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
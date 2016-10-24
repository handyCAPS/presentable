import React from 'react';

import Form from './Form';

const Login = React.createClass({
	handleSubmit() {
		console.log("Clicked");
	},
	render() {
		const inputs = [
			{
				name: 'userName',
				label: 'User Name'
			},
			{
				name: 'password',
				label: 'Password',
				type: 'password'
			}
		];
		const buttons = [
			{
				label: 'Sign Up'
			}
		];
		return (
			<Form
			inputs={inputs}
			buttons={buttons}
			handleSubmit={this.handleSubmit} />
			);
	}
});

export default Login;
import React from 'react';

const Login = React.createClass({
	render() {
		return (
			<div className="wrapper wrapper--form">
				<p className="form__input-wrap">
					<label htmlFor="userName" className="form__label">User Name</label>
					<input type="text" name="userName" id="userName" className="form__input"/>
				</p>
				<p className="form__input-wrap">
					<label htmlFor="password" className="form__label">Password</label>
					<input type="password" name="password" id="password" className="form__input"/>
				</p>
				<button type="button" className="btn btn--success btn--signup form__button form__button--signup">Sign Up</button>
			</div>
			);
	}
});

export default Login;
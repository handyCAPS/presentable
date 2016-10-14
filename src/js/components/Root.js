import React from 'react';

import { Link } from 'react-router';

const Root = React.createClass({
	render() {
		return (
			<main className="mainWrap">
				<Link to="/"><h1 className="site-header">Presentable</h1></Link>
				<nav className="nav nav--top">
					<ul className="nav__list">
						<Link to="/"><li className="nav__item">Home</li></Link>
						<Link to="login"><li className="nav__item">LogIn</li></Link>
					</ul>
				</nav>
				{React.cloneElement(this.props.children, this.props)}
			</main>
			);
	}
});

export default Root;
import React from 'react'
import { Link, IndexLink, withRouter } from 'react-router'

export const App = withRouter((props) => {
	return (
		<div>
			<nav className="navbar navbar-default" id="header">
				<div className="container-fluid">
					<div className="navbar-header">
						<IndexLink to="/" className="navbar-brand" id="logo">CopCut</IndexLink>
					</div>

					<ul className= "nav navbar-nav">
						<li><Link to="#">How It Works</Link></li>
						<li><Link to="#">About</Link></li>
					</ul>

					<ul className="nav navbar-nav navbar-right">
						<li><Link to="/register/barber">Become a Barber</Link></li>
						<li><Link to="/register/user"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
						<li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
					</ul>
				</div>
			</nav>

			<div>
				{props.children}
			</div>
		</div>
	)
});

export const RegisterBarber = () => {
	return (
		<h3>Register Barber</h3>
	);
}

export const RegisterUser = () => {
	return (
		<h3>Register User</h3>
	);
}

export const Login = () => {
	return (
		<h3>Login</h3>
	);
}

export const Home = () => {
	return (
		<h3>Home</h3>
	);
}
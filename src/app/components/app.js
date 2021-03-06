import React from 'react'
import { Link, IndexLink, withRouter } from 'react-router'
import Promise from 'bluebird'
import 'whatwg-fetch'

class App extends React.Component {
	constructor(props, context) {
		super(props)
		this.state = context.data || window.__initialState__ || {authenticated: false, user: null};
	}

	componentDidMount() {
		fetch('/api/authenticated', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		})
		.then(response => response.json())
		.then(data => this.setState({authenticated: data.authenticated, user: data.user}));
	}

	setAuthenticationState(authenticated, user) {
		this.setState({authenticated, user});
	}

	render() {
		const childrenWithProps = React.Children.map(this.props.children, 
			(child) => React.cloneElement(child, {
				setAuthenticationState: this.setAuthenticationState.bind(this),
				authenticated: this.state.authenticated
			})
	    );

	    let nav;

	    if(this.state.authenticated) {
	    	nav = (
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
							<li><Link to="/profile">{this.state.user.username}</Link></li>
							<li><Link to="/logout"><span className="glyphicon glyphicon-log-in"></span> Logout</Link></li>
						</ul>
					</div>
				</nav>
			);
	    }
	    else {
	    	nav = (
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
			);
	    }

		return (
			<div>
				{nav}
				<div>
					{childrenWithProps}
				</div>
			</div>
		);
	}
}

App.contextTypes = { 
  data: React.PropTypes.object
};

export default withRouter(App);
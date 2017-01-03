import React from 'react'
import { withRouter } from 'react-router'

class Restrict extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		if(!this.props.authenticated) {
			setTimeout(() => {
				this.props.router.push('/login');
			}, 3000);
		}
	}

	render() {
		if(this.props.authenticated) {
			return (
				<div>
					{this.props.children}
				</div>
			);
		}
		else {
			return (
				<h3>You must be logged in to do that. You will be redirected...</h3>
			);
		}
	}
}

const LoginRestrict = withRouter(Restrict);

export default (Component) => {
	return (props) => {
		return (
			<LoginRestrict {...props}><Component {...props} /></LoginRestrict>
		);
	}
}
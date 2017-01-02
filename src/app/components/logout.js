import React from 'react'
import { withRouter } from 'react-router'
import Promise from 'bluebird'
import 'whatwg-fetch'

class Logout extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		setTimeout(() => {
			this.props.setAuthenticationState(false, null);

			fetch('/api/logout')
			.then(() => {
				this.props.router.push('/');
			});
		}, 2000);
  	}

	render() {
		return (
			<p>You will be logged out and redirected...</p>
		);
	}
}

Logout.propTypes = {
  router: React.PropTypes.object.isRequired
};

export default withRouter(Logout);
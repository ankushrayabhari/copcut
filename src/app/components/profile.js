import React from 'react'
import { withRouter } from 'react-router'

export default withRouter((props) => {
	if(props.authenticated) {
		return (
			<h3>Profile</h3>
		);
	}
	else {
		setTimeout(() => {
			props.router.push('/login');
		}, 3000);
		return (
			<h3>You must be logged in to do that. You will be redirected...</h3>
		);
	}
	
});
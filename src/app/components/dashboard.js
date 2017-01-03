import React from 'react'
import LoginRestrict from './loginrestrict'
import { withRouter } from 'react-router'

const Dashboard = (props) => {
	return (
		<h3>Dashboard</h3>
	);
}

export default LoginRestrict(withRouter(Dashboard));
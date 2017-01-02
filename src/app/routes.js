import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import Home from './components/home'
import RegisterUser from './components/registeruser'
import RegisterBarber from './components/registerbarber'
import Login from './components/login'
import Logout from './components/logout'
import Dashboard from './components/dashboard'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/register/barber" component={RegisterBarber} />
		<Route path="/register/user" component={RegisterUser} />
		<Route path="/login" component={Login} />
		<Route path="/logout" component={Logout} />
		<Route path="/dashboard" component={Dashboard} />
	</Route>
);
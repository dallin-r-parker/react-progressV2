import React from 'react'
import {Route, Switch, HashRouter as Router} from 'react-router-dom'
import LoginLayout from '../components/Layouts/LoginLayout'
import AdminLayout from '../components/Layouts/AdminLayout'
import PrivateRoute from './PrivateRoute'

export default () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LoginLayout}/>
				<PrivateRoute exact path='/admin' component={AdminLayout}/>
			</Switch>
		</Router>
	)
}

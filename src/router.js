import React from 'react'
import {Route, Switch, Redirect, HashRouter as Router} from 'react-router-dom'
import LoginLayout from './components/Layouts/LoginLayout'
import AdminLayout from './components/Layouts/AdminLayout'

const PrivateRoute = ({component: Component, path}) => {
	const auth = true
	return (
		<Route path={path} render={props => (
			auth ? (
				<Component {...props}/>
			) : (
				<Redirect to={{
					pathname: '/',
					state: { from: props.location}
				}}/>
			)
		)}/>
	)
}

export default () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LoginLayout}/>
				<PrivateRoute path='/admin' component={AdminLayout}/>
			</Switch>
		</Router>
	)
}

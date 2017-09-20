import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'

const PrivateRoute = ({component: Component, path, authed}) => {
	return (
		<Route path={path} render={props => (
			authed ? (
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

const mapStateToProps = reducer => {
	return {
		authed: reducer.value.authed
	}
}

export default connect(mapStateToProps)(PrivateRoute)
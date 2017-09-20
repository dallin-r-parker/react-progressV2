import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export default ({component: Component, path}) => {
	const auth = false
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
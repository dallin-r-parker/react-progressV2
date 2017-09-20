import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Routing from './routing/router'
import store from './store'

const App = () => {
	return (
		<Provider store={store}>
			<Routing/>
		</Provider>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'))
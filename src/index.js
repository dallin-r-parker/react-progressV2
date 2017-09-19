import React from 'react'
import ReactDOM from 'react-dom'
import LoginLayout from './components/Layouts/LoginLayout'

const App = () => {
	return (
		<section className="main-container">
			<LoginLayout/>
		</section>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'))
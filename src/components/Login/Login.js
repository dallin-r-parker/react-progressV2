import React, {Component} from 'react'

class Login extends Component{
	constructor(props){
		super(props)
		this.state = {
			email: '',
			password: ''
		}

		this.handleEmailInput = this.handleEmailInput.bind(this)
		this.handlePwInput = this.handlePwInput.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}

	handleEmailInput(email){
		console.log('email: ', email.target.value)
	}
	handlePwInput(pw){
		console.log('pw: ', pw.target.value)
	}

	handleLogin(e){
		e.preventDefault()
	}
	render(){
		return(
			<div className="row">
				<form className="col s10" onSubmit={this.handleLogin}>
					<h5>Progress Login</h5>
					<input placeholder='email' onChange={this.handleEmailInput}/>
					<input placeholder='password' onChange={this.handlePwInput}/>
					<button
						className='btn'
						onClick={this.handleLogin}>Login</button>
				</form>
			</div>
		)
	}
}

export default Login
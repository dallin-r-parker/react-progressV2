import React, {Component} from 'react'
import * as actions from '../../actions/auth'
import {connect} from 'react-redux'

class Login extends Component{
	constructor(props){
		super(props)

		this.handleEmailInput = this.handleEmailInput.bind(this)
		this.handlePwInput = this.handlePwInput.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}

	handleEmailInput = email => (this.props.emailInput(email.target.value))
	handlePwInput = pw => (this.props.passwordInput(pw.target.value))


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

const mapStateToProps = reducer => {
	console.log('Login: ', reducer)
}

export default connect(mapStateToProps, actions)(Login)
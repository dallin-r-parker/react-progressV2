import React, {Component} from 'react'

class LoginLayout extends Component{
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
    	console.log('email: ', email)
	}
	handlePwInput(pw){
		console.log('pw: ', pw)
	}

	handleLogin(e){
		e.preventDefault()
		
	}
    
    render(){
        return(
	        <form onSubmit={this.handleLogin}>
		        <h1>Progress Login</h1>
		        <input placeholder='email' onChange={this.handleEmailInput}/>
		        <input placeholder='password' onChange={this.handlePwInput}/>
		        <button onClick={this.handleLogin}>Login</button>
	        </form>
        )
    }
}

export default LoginLayout
import React, {Component} from 'react'
import Login from '../Login/Login'


class LoginLayout extends Component{

    render(){
        return(
	        <div className="container login-container">
		        <Login/>
	        </div>
        )
    }
}

export default LoginLayout
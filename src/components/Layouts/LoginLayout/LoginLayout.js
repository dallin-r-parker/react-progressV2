import React, {Component} from 'react'
import Login from '../../Login/Login'
import "./login_layout.scss"


class LoginLayout extends Component{

    render(){
        return(

	        <div className="login-container">
		        <Login/>
	        </div>
        )
    }
}

export default LoginLayout
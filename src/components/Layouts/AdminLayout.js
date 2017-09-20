import React, {Component} from 'react'
import {Redirect, Route} from 'react-router-dom'

class AdminLayout extends Component{
    constructor(props){
        super(props)
      //this.state = {auth: true}
    }

    //componentWillMount(){
    //    console.log('auth: ', this.state.auth)
	   // return (
    //    <Route path='/admin'
    //           render={() => this.state.auth
			//           ? <Redirect to="/"/>
			//           : <AdminLayout/>}/>
	   // )
    //}


    render(){
        return <div>Admin Section</div>

    }
}

export default AdminLayout
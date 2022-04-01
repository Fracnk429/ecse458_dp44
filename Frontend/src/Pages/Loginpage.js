import '../Css/login.css';

import React, { Component } from 'react'

export default class Loginpage extends Component {
	constructor(props){
		super(props)
		this.state ={
		  username: '',	  
		  password: '',	  
		}
	  }
	  onChange(e){
		console.log(e.target.name)
		this.setState({
		  [e.target.name] : e.target.value
		})
	  }
	  register= ()=>{
        console.log(this.state)
    }

  render() {
	return (
		<div className="container">
        <div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
				<div className="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type='text' name='username' value={this.state.username} onChange={this.onChange.bind(this)} className="form-control" placeholder="UserName"/>
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" name='password' value={this.state.password} onChange={this.onChange.bind(this)}  className="form-control" placeholder="Password"/>
					</div>
					
					<div className="form-group">
						<button type="button" onClick={this.register} className="btn float-right login_btn">Login</button>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<button type="button" onClick={()=>{window.location.href="http://localhost:3000/register"} }className="btnSubmit">Register</button>
				</div>
			</div>
		</div>
	</div>
	    </div>
	)
  }
}

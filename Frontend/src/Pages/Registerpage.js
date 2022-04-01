
import '../Css/register.css';



import React, { Component } from 'react'



export default class Registerpage extends Component {
   
  constructor(props){
    super(props)
    this.state ={
      name : '',
      email:'',
      password:'',
      password2:'',
      type:'',
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

    handleChange=(name,val)=>{
        this.setState(
            {
                [name]:val
            }
        )
    }

    
    
    
    
  render() {
      const {type} =this.state
    return (
        <div className="container register-form">
        <div className="form">
            <div className="note">
                <p>SmartLab System Sign up</p>
            </div>

            <div className="form-content">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type='text' name='name' value={this.state.name} onChange={this.onChange.bind(this)} className="form-control" placeholder="Your Name *"/>
                        </div> 
                        <div className="form-group">
                            <input type='email' name ='email' value={this.state.email} onChange={this.onChange.bind(this)} className="form-control" placeholder="Email *"/>
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="form-group">
                            <input type="password" name='password' value={this.state.password} onChange={this.onChange.bind(this)}  className="form-control" placeholder="Your Password *"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name='password2' value={this.state.password2} onChange={this.onChange.bind(this)}  className="form-control" placeholder="Confirm Your Password *"/>
                        </div>
                        <div className="form-group"> 
                        <br/>                              
                            <input type="radio" checked={type==='admin'} onChange={()=>{this.handleChange('type', 'admin')}} />Admin
                            <input type="radio" checked={type==='user'} onChange={()=>{this.handleChange('type', 'user')}}/>User                               
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <button type="button" onClick={this.register} className="btnSubmit">Submit</button>
                <button type="button" onClick={()=>{window.location.href="http://localhost:3000/login"} }className="btnSubmit">Back</button>
               
            </div>
        </div>
    </div>
    )
  }
}

 
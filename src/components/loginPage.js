import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';


export default class LoginPage extends React.Component{
  handleChange = (name) => (event) => {
    this.props.handleFieldChange(name, event.target.value);
  };

  onSubmitForm = () => {
    // axios.post('http://localhost:3000/user/add',this.state.signUpForm).then(function(res)
    // {
    //   console.log(res)
    // }).catch(function(error){
    //
    //   console.log(error)
    // });

    this.props.onSubmitForm(this.props.login.firstName,this.props.login.lastName,this.props.login.email,this.props.login.pwd,this.props.login.phNo);
  }


  render(){
    return <div>
    <form>
    <div className="form-group">
      <label>First Name:</label>
      <input
        type="textbox"
        className="form-control"
        id="firstName"
        placeholder="Enter the First Name"
        name="firstName"
        onChange={this.handleChange("firstName")}
        value={this.props.login.firstName}
      />
    </div>
    <div className="form-group">
      <label>Last Name:</label>
      <input
        type="textbox"
        className="form-control"
        id="lastName"
        placeholder="Enter the Last Name"
        name="lastName"
        onChange={this.handleChange("lastName")}
        value={this.props.login.lastName}
      />
    </div>
  <div className="form-group">
    <label>Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={this.handleChange("email")}/>
  </div>
  <div className="form-group">
    <label>Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={this.handleChange("password")}/>
  </div>
  <div className="form-group">
    <label>Phone Number:</label>
    <input type="number" className="form-control" id="phNo" placeholder="EnterYour Phone Number" name="phNo" onChange={this.handleChange("phone")}/>
  </div>
<input  type="button" className="btn btn-success" value="  Sign Up  " onClick={()=>this.onSubmitForm()} />
</form>

    </div>
  }

};

import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import axios from 'axios';

const bg = require('../images/bg.jpg');

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    position: 'fixed',
    margin: '0 auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    width: 308,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.6)',
    padding: 20,
    borderRadius: 5,
    zIndex: 1,
  },
  cover: {
    width: '100%',
    height: '100%',
    filter: 'blur(3px)',
    zIndex: 0,
    position: 'fixed',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },

});


class LoginPage extends React.Component {
  handleChange = (name) => (event) => {
    this.props.handleFieldChange(name, event.target.value);
  };

  onSubmitForm = () => {
    this.props.onSubmitForm(this.props.login.firstName, this.props.login.lastName, this.props.login.email, this.props.login.password, this.props.login.phone);
  }

  handleClose = () => {
    this.props.snackClose(this.props.login.open);
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <img src={bg} className={classes.cover} />
        <div className={classes.loginForm}>
          <TextField
            id="with-placeholder"
            label="First Name"
            placeholder="Please Enter your First Name"
            className={classes.textField}
            onChange={this.handleChange("firstName")}
            value={this.props.login.firstName}
            margin="normal"
          />

          <TextField
            id="with-placeholder"
            label="Last Name"
            placeholder="Please Enter your Last Name"
            className={classes.textField}
            onChange={this.handleChange("lastName")}
            value={this.props.login.lastName}
            margin="normal"
          />

          <TextField
            id="with-placeholder"
            label="Email"
            placeholder="Please Enter your Email"
            className={classes.textField}
            onChange={this.handleChange("email")}
            value={this.props.login.email}
            margin="normal"
          />

          <TextField
            id="with-placeholder"
            label="Password"
            placeholder="Please Enter your Password"
            className={classes.textField}
            onChange={this.handleChange("password")}
            value={this.props.login.password}
            margin="normal"
          />

          <TextField
            id="with-placeholder"
            label="Phone Number"
            placeholder="Please Enter your Phone Number"
            className={classes.textField}
            onChange={this.handleChange("phone")}
            value={this.props.login.phone}
            margin="normal"
          />
          <Button variant="raised" color="primary" className={classes.button} onClick={() => this.onSubmitForm()}>
            Sign up
        </Button>

          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.props.login.open}
            autoHideDuration={2000}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{this.props.login.message}</span>}
          />
        </div>
      </div>
    )
  }

};
//     <form>
//     <div className="form-group">
//       <label>First Name:</label>
//       <input
//         type="textbox"
//         className="form-control"
//         id="firstName"
//         placeholder="Enter the First Name"
//         name="firstName"
//         onChange={this.handleChange("firstName")}
//         value={this.props.login.firstName}
//       />
//     </div>
//     <div className="form-group">
//       <label>Last Name:</label>
//       <input
//         type="textbox"
//         className="form-control"
//         id="lastName"
//         placeholder="Enter the Last Name"
//         name="lastName"
//         onChange={this.handleChange("lastName")}
//         value={this.props.login.lastName}
//       />
//     </div>
//   <div className="form-group">
//     <label>Email:</label>
//     <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={this.handleChange("email")}/>
//   </div>
//   <div className="form-group">
//     <label>Password:</label>
//     <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" onChange={this.handleChange("password")}/>
//   </div>
//   <div className="form-group">
//     <label>Phone Number:</label>
//     <input type="number" className="form-control" id="phNo" placeholder="EnterYour Phone Number" name="phone" onChange={this.handleChange("phone")}/>
//   </div>
// <input  type="button" className="btn btn-success" value="  Sign Up  " onClick={()=>this.onSubmitForm()} />
// <Snackbar
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'left',
//     }}
//     open={this.props.login.open}
//     autoHideDuration={2000}
//     onClose={()=>this.handleClose()}
//     ContentProps={{
//       'aria-describedby': 'message-id',
//     }}
//     message={<span id="message-id">Data saved Successfully</span>}
//   />
//
//  </form>



export default withStyles(styles)(LoginPage);

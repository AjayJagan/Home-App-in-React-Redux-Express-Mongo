import React from "react";
import ReactDOM from "react-dom";
import { Link, Route, Router, BrowserRouter, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const bg = require('../images/SignInBG.jpg');

const styles = theme => ({
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
    SignInForm: {
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
});
class SignIn extends React.Component {
    componentDidMount() {
    }

    handleChange = (name) => (event) => {
        this.props.handleTextChange(name, event.target.value);
    };
    onSignIn = () => {
        if (this.props.signIn.email.length == 0 || this.props.signIn.password.length == 0) {
            console.log("fill the fucking credentials");
        }
        else {
            this.props.handleSignIn(this.props.signIn.email, this.props.signIn.password);
        }
    }
    render() {
        const { classes } = this.props;


        if (this.props.signIn.authenticated) {
            return this.props.children;
        }

        return (
            <div className={classes.container}>
                <img src={bg} className={classes.cover} />
                <div className={classes.SignInForm}>
                    <TextField
                        id="with-placeholder"
                        required
                        label="Email"
                        placeholder="Please Enter your Email"
                        className={classes.textField}
                        onChange={this.handleChange("email")}
                        value={this.props.signIn.email}
                        margin="normal"
                        error={Boolean(this.props.signIn.emailError.length)}
                        helperText={this.props.signIn.emailError}
                    />

                    <TextField
                        id="with-placeholder1"
                        required
                        label="Password"
                        placeholder="Please Enter our Password"
                        className={classes.textField}
                        onChange={this.handleChange("password")}
                        // value={}
                        margin="normal"
                        InputProps={{
                            type: 'password'
                        }}
                    />
                    <Button variant="raised" color="primary" className={classes.button} onClick={this.onSignIn} >
                        SIGN IN
                </Button>
                </div>
            </div>
        );
    };

};

export default withStyles(styles)(SignIn);

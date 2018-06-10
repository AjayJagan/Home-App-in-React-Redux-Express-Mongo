import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import { Route, Redirect } from 'react-router'
import { Route, Redirect, Switch } from 'react-router-dom';
import signIn from './signIn';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});
class userDashboard extends React.Component {
    handleLogout = () => {
        this.props.handleLogout();
    };


    render() {
        const { classes } = this.props;

        if (this.props.userDashboard.isLoggedOut) {

        }
        return (<div>
            <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleLogout}>
                LOGOUT
      </Button>
        </div>

        );

    }

}
export default withStyles(styles)(userDashboard);
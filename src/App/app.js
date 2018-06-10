import React from "react";
import { ConnectedRouter } from 'react-router-redux';
import { Link, Route, Router, BrowserRouter, Switch } from 'react-router-dom';
import SignIn from '../containers/signInContainer';
import { withStyles } from '@material-ui/core/styles';
import Login from '../containers/loginContainer';
import userDashboard from '../containers/userDashboardContainer';

const styles = {

};

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <SignIn>
          <Switch>
            <Route exact path='/' component={userDashboard} />
          </Switch>
        </SignIn>
      </div>
    );
  }
};

export default withStyles(styles)(App);

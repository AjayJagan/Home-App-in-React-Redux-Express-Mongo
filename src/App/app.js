import React from "react";

import { withStyles } from '@material-ui/core/styles';
import Login from '../containers/loginContainer';

const styles = {

};

class App extends React.Component{
  render(){
    const { classes } = this.props;

    return(
      <div>
        <Login />
      </div>
    );
  }
};

export default withStyles(styles)(App);

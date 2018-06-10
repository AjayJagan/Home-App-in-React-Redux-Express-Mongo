import { combineReducers } from 'redux';
import signInReducer from './reducers/signInReducer'
import loginReducer from './reducers/loginReducer';
import userDashboardReducer from './reducers/userDashboardReducer';

export default combineReducers({
    login: loginReducer,
    signIn: signInReducer,
    userDashboard:userDashboardReducer,

});

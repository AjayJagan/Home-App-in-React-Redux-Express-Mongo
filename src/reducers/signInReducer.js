import { types } from '../actions/signInAction';
import {types as types2} from '../actions/userDashboardAction'
import { validateEmail } from './signInReducerHelpers';

const initialState = {
    email: '',
    password: '',
    emailError:'',
    passwordError:'',
    authenticated: false,
    token: '',
}

export default function signInReducer(state = initialState, action) {
   
    switch (action.type) {
        case types.HANDLE_TEXT_CHANGE:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
                emailError: validateEmail(action.payload.value),
            };
        case types.HANDLE_SIGN_IN:
            return {
                ...state,
                authenticated: true,
                token: action.payload.token,
            };
        case types2.LOGOUT_ACTION:
        return{
            ...state,
            authenticated:false,
        }
        default: return state;
    }
}





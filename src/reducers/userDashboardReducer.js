import { types } from '../actions/userDashboardAction';

const initialState = {
    isLoggedOut: false,

};

export default function userDashboardReducer(state = initialState, action) {
    switch (action.type) {
        case (types.LOGOUT_ACTION):
        return {
            ...state,
            isLoggedOut:true,
        }

        
        default:
            return state;
    }

}
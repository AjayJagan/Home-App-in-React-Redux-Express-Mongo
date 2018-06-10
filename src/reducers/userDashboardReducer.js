import { types } from '../actions/userDashboardAction';

const initialState = {
    isLoggedOut: false,

};

export default function userDashboardReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }

}
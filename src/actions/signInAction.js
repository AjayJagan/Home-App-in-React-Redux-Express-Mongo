import axios from '../axios';
//import history from '../history';

export const types = {
    HANDLE_TEXT_CHANGE: 'HANDLE_TEXT_CHANGE',
    HANDLE_SIGN_IN_ERROR_EMAIL: 'HANDLE_SIGN_IN_ERROR_EMAIL',
    HANDLE_SIGN_IN_ERROR_PASSWORD: ' HANDLE_SIGN_IN_ERROR_PASSWORD',
    HANDLE_SIGN_IN: 'HANDLE_SIGN_IN',
}

export const handleTextChange = (name, value) => ({
    type: types.HANDLE_TEXT_CHANGE,
    payload: {
        name,
        value
    }
});

export const handleSignIn = (email, password) => {
    const payload = {
        email,
        password,
    };
    return (dispatch) => axios.post('user/signIn', payload).then((response) => {
        if (!response.data.auth) {
            if (response.data.type === "email") {
                dispatch({
                    type: types.HANDLE_SIGN_IN_ERROR_EMAIL,
                    payload: {
                        msg: response.data.msg,
                    }   
                });
            }
            else if (response.data.type === "password") {
                dispatch({
                    type: types.HANDLE_SIGN_IN_ERROR_PASSWORD,
                    payload: {
                        msg: response.data.msg,
                    }
                });
            }
        }
        else if (response.data.auth) {
            localStorage.setItem('auth', response.data.token);
            dispatch({
                type: types.HANDLE_SIGN_IN,
                payload: {
                    ...response.data,
                }
            });
        }

    }).catch((err) => {
        console.log(err)
    });
};
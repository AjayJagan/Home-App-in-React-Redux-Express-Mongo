export const types = {
    LOGOUT_ACTION: 'LOGOUT_ACTION',
}

export const handleLogout = () => {
    localStorage.removeItem('auth');
    return {
        type: types.LOGOUT_ACTION,
        payload: {

        }
    }
};
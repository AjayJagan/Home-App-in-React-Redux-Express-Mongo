export const validateEmail = (email) => {
    if (email.length === 0 || email.indexOf('@') !== -1) {
        return '';
    } else {
        return 'Invalid email';
    }
}
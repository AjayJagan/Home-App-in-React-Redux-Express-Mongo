import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
});

instance.interceptors.request.use(function (config) {
    var user = require('./store').default.getState().signIn;
    if (user.authenticated) {
        config.headers['Authorization'] = user.token;
        console.log("this is the user token"+user.token);
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance;
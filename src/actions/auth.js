import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import api from "../api";

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
})

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
})

export const login = (credentials) => dispatch =>
<<<<<<< HEAD
    api.user.login(credentials).then(user => {
        localStorage.loginToken = user.token;
        localStorage.userRole = user.role;
        localStorage.userId = user.noEmploye;
        dispatch(userLoggedIn(user));
=======
 api.user.login(credentials).then(user => {
    localStorage.loginToken=user.token;
    localStorage.userRole =user.role; 
    localStorage.userId = user.noEmploye;
    dispatch(userLoggedIn(user));
>>>>>>> master
    });

export const logout = () => dispatch => {
    localStorage.removeItem("loginToken");
<<<<<<< HEAD
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
=======
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole"); 
>>>>>>> master
    dispatch(userLoggedOut());
};
 //api.user.login(credentials).then(res => res.data.user);
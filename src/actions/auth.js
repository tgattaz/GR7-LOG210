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
 api.user.login(credentials).then(user => {
    localStorage.loginToken=user.token;
    localStorage.userRole =user.role; 
    localStorage.userId = user.noEmploye;
    dispatch(userLoggedIn(user));
    });

export const logout = () => dispatch => {
    localStorage.removeItem("loginToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole"); 
    dispatch(userLoggedOut());
};
 //api.user.login(credentials).then(res => res.data.user);
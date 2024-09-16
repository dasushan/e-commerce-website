import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    emailId: '',
    isLoggedIn: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token =  action.payload.idToken;
            state.emailId = action.payload.email;
            localStorage.setItem('token', state.token)
            state.isLoggedIn = true;
        },
        logout: (state, action) => {
            state.token = null;
            state.emailId = '';
            localStorage.removeItem('token')
            state.isLoggedIn = false;
        },
        getAuthStatus : (state, action) => {
            const token = localStorage.getItem('token');
            state.token = token;
            state.isLoggedIn = !!token;
        }
    }
})

export const {login, logout, getAuthStatus} = authSlice.actions;

export const getEmailId = (state) => state.auth.emailId;
export const getLogInStatus = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;
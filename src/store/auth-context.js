import React, {useState} from 'react';

const AuthContext = React.createContext({
    token: '',
    emailId: '',
    isLoggedIn: false,
    login:(token) => {},
    logout: () => {}
})

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    const initialEmailId = localStorage.getItem('emailId')
    const [token, setToken] = useState(initialToken);
    const [emailId, setEmailId] = useState(initialEmailId)

    const userIsLoggedIn = !!token;
    console.log(userIsLoggedIn);
    console.log(token)
    console.log(emailId)

    const loginHandler = (data) => {
        setToken(data.idToken)
        setEmailId(data.email)
        localStorage.setItem('token', data.idToken)
        localStorage.setItem('emailId', data.email)
    }

    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('emailId')
    }
    const contextValue = {
        token: token,
        emailId: emailId,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext

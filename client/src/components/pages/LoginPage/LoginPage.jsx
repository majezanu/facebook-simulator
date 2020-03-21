import React, {useState, useEffect } from 'react'
import Login from 'molecules/Login/Login';
import userService from 'services/UserService';
import socketService from 'services/socketService';
import {EVENTS} from 'common/constants';
import Navbar from 'organisms/Navbar/Navbar';
const LoginPage = (props) => {    
    const [loading, setLoading] = useState(false);

    const onLoginSuccess = (response) => {
        socketService.connect();
        socketService.socket.on(EVENTS.CONNECT, () => {
            setLoading(true);
            socketService.socket.emit(EVENTS.AUTHORIZE, {token: localStorage.getItem('token')});
        });
        socketService.socket.on(EVENTS.AUTHORIZE_SUCCESSFUL, () => {
            setLoading(false);
            props.history.push('/');
        });
    }
    const onLoginAction = (credentials) => {
        setLoading(true);
        userService.login(credentials, onLoginSuccess, setLoading);
    }

    return (
        <div className="container-fluid">
             <Navbar></Navbar>
            <Login onLoginAction={onLoginAction} loading={loading}></Login>
        </div>
    )
};

export default LoginPage
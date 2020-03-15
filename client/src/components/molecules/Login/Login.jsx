import React, {useState } from 'react'
import './Login.css';
import Input from 'atoms/Input/Input';
import Button from 'atoms/Button/Button';
import MultipleLoading from 'atoms/MultipleLoading/MultipleLoading';

const Login = (props) => {   
    const [credentials, setCredentiales] = useState({username: '', password: ''}); 

    const setData = (e) => {
        e.preventDefault();
        const key = e.target.id;
        const value = e.target.value;
        setCredentiales(prevState => {
            return {...prevState, [key]: value}
        });
    }
    const login = (e) => {
        e.preventDefault();
        props.onLoginAction(credentials);
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="card">
                    <div className="card-header login-card-header-text text-left">
                        Login
                    </div>
                    <div className="card-body">
                        <form className="form-inline login-form">
                            <div className="container">
                                <div className="row">
                                    <Input
                                    id='username'
                                    title='Nombre de usuario'
                                    name='username'
                                    type='text'
                                    placeholder='username'
                                    value={credentials.username}
                                    handleChange={setData}
                                    ></Input>
                                </div>
                                <div className="row">
                                    <Input
                                    id='password'
                                    title='Contraseña'
                                    name='password'
                                    type='password'
                                    placeholder='password'
                                    value={credentials.password}
                                    handleChange={setData}
                                    ></Input>
                                </div>
                                <hr/>
                                <div className="row justify-content-center">
                                {
                                    props.loading ? 
                                    <div>
                                        <MultipleLoading></MultipleLoading>
                                    </div> :
                                    <Button action={login}>Iniciar</Button>
                                }
                                </div>
                            </div>
                            
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login
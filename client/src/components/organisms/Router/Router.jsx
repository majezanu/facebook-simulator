import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} 
  from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import Home from '../../pages/Home/Home';
import LoginPage from '../../pages/LoginPage/LoginPage';

const validateAuth = {
    isAuthenticated: !!localStorage.getItem('token') ,
    authenticate(cb) {
      this.isAuthenticated = this.token ? true : false 
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      validateAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

const RouterSwitch = (props) => (
    <Router>
        <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route path='/login' component={LoginPage} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default RouterSwitch
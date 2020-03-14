import React from 'react';
import { BrowserRouter as Router, Route, Switch} 
  from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import Home from '../../pages/Home/Home';

const RouterSwitch = (props) => (
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default RouterSwitch
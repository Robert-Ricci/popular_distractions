import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BlogList from './BlogList';
import Home from './Home';


const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/blogs' component={BlogList} />
            </Switch>
        </div>
    );
};

export default Router;
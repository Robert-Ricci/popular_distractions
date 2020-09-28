import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BlogList from './BlogList';
import Home from './Home';
import BlogForm from './BlogForm';


const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/blogs' component={BlogList} />
                <Route exact path='/blogform' component={BlogForm} />
            </Switch>
        </div>
    );
};

export default Router;
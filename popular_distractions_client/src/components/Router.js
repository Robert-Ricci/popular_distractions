import React from 'react';
import { Switch, Route} from 'react-router-dom';

import BlogList from './BlogList';
import Home from './Home';
import BlogForm from './BlogForm';
import About from './About';
import Contact from './Contact';
import BlogShow from './BlogShow'
import Update from './Update';


const Router = () => {
    return (
        
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/blogs' component={BlogList} />
                <Route exact path='/blogform' component={BlogForm} />
                <Route exact path='/blogform/update/:id' render={props => <Update {...props}/>} />
                <Route exact path='/blogshow/:id' render={props => <BlogShow {...props}/>} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
            </Switch>
       
    );
};

export default Router;
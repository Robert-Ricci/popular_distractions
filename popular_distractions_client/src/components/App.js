import React from 'react';
import BlogContainer from './BlogContainer';
import Router from './Router';
import NavBar from './NavBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import './style.scss';

library.add(faHome)
const App = () => {
    return (
        <div>
            <NavBar />
            <Router/>
            <BlogContainer />
           
        </div>
    );
};

export default App;
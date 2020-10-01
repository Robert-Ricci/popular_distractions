import React from 'react';
import BlogContainer from './BlogContainer';
import Router from './Router';
import NavBar from './NavBar';

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
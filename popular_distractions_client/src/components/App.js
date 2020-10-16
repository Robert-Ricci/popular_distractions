import React from 'react';
import BlogContainer from './BlogContainer';
import Router from './Router';


import {Navbar, Nav} from 'react-bootstrap';
import './style.scss';

const App = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">POPULAR DISTRACTIONS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/blogs">Blog Posts</Nav.Link>
                        <Nav.Link href="/blogform">Blog Form</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
  </Navbar.Collapse>
</Navbar>
            
            <Router/>
            <BlogContainer />
           
        </div>
    );
};

export default App;
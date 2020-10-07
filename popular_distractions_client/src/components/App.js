import React from 'react';
import BlogContainer from './BlogContainer';
import Router from './Router';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faHome } from '@fortawesome/free-solid-svg-icons'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './style.scss';

// library.add(faHome)
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
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
  </Navbar.Collapse>
</Navbar>
            
            <Router/>
            <BlogContainer />
           
        </div>
    );
};

export default App;
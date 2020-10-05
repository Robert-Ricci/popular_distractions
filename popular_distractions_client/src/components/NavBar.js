import React, { Component } from 'react';
import { NavLink }from 'react-router-dom';

const link = {
    width: '310px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
    
    
  }

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                 <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink>
               <NavLink
                  to="/blogs"
                  exact
                  style={link}
                  activeStyle={{
                  background: 'darkblue'
                    }}
        >Blogs</NavLink>
        <NavLink
                  to="/blogform"
                  exact
                  style={link}
                  activeStyle={{
                  background: 'darkblue'
                    }}
        >Blog Form</NavLink>
        <NavLink
                  to="/about"
                  exact
                  style={link}
                  activeStyle={{
                  background: 'darkblue'
                    }}
        >About</NavLink>
            </div>
        );
    }
}

export default NavBar;
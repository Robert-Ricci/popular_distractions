import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/button';
import React, {Component, useState } from 'react';

class BlogList extends Component {
    
    state = {
        count:0
    }
    
    handleClick = (e) => {
    //    value = e.target;
      this.setState({
        count: this.state.count + 1
      })
             }

    

    render() {
        return (
            <div className ="blog-list">
            <h1>Blog List:</h1>
            {this.props.blogs.map((blog) => 
                <ul key={blog.id} >
                    <li>
                     < Link  to={`/blogshow/${blog.id}`}>{blog.title}-{blog.author}</Link>   
                     <Button onClick={() => this.handleClick()} > Click me!{this.state.count} </ Button>
                    </li>
                </ul>
            )}
        </div>
        );
    }
}

const mapStateToProps = state =>{
    return {blogs: state.blogs}
}

export default connect(mapStateToProps)(BlogList);

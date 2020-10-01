import React, { Component } from 'react';

// import BlogForm from './BlogForm';
import { connect } from 'react-redux';

import { fetchBlogs } from '../actions/blogActions';
// import BlogList from './BlogList';

class BlogContainer extends Component {

    componentDidMount() {
        this.props.fetchBlogs()
    }

    render() {
        return (
            <div>
                
                 
            </div>
        );
    }
}

export default connect (null, {fetchBlogs}) (BlogContainer);
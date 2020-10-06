import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../actions/blogActions';


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


   
export default connect (null, { fetchBlogs }) (BlogContainer);
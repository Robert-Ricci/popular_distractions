import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchBlogs, deleteBlog} from '../actions/blogActions';


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

// const mapDispatchToProps = dispatch => {
//     return {
//       addBlog: text => dispatch( { type: fetchBlogs, text }), 
//       delete: id => dispatch(deleteBlog(id))
//     }
//   }
   
export default connect (null, { fetchBlogs, deleteBlog }) (BlogContainer);
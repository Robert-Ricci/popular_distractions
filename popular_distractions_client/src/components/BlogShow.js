import React from 'react';
import { connect } from 'react-redux';
import { deleteBlog } from '../actions/blogActions';


const BlogShow = ( {blogs, match, id, deleteBlog} ) => {

    const handleClick = (id) => {
        console.log('label',id)
        deleteBlog(id)
    }

    if(blogs.length === 0) return null 

    const blog = blogs.find((e) => e.id === parseInt(match.params.id))

    
    return (
        <div className ="blogs">
           <h1>{blog.title}</h1>
           <p>{blog.content}</p>
           <h3>{blog.author}</h3>
           <button onClick={() => handleClick(blog.id)}>Delete</button>
        </div>
    );
};



const mapStateToProps = state =>{
    return {blogs:state.blogs}
}



export default connect(mapStateToProps, {deleteBlog})(BlogShow);
import React from 'react';
import { connect } from 'react-redux';

const BlogShow = ( {blogs, match} ) => {

    const handleClick =() => {
        
    }
    if(blogs.length === 0) return null 
    const blog = blogs.find((e) => e.id === parseInt(match.params.id))

    console.log(blog)
    return (
        <div>
           <h1>{blog.title}</h1>
           <p>{blog.content}</p>
           <h3>{blog.author}</h3>
           <button onClick={handleClick}>Delete</button>
        </div>
    );
};



const mapStateToProps = state =>{
    return {blogs:state.blogs}
}

export default connect(mapStateToProps)(BlogShow);
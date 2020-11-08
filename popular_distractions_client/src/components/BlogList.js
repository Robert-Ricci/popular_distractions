import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
// import CountButton from './CountButton'

const BlogList = ({ blogs }) => {
    

   
        return (
            <div className ="blog-list">
            <h1>Blog List:</h1>
            {blogs.map((blog) => 
                <ul key={blog.id} >
                    <li>
                     < Link to={`/blogshow/${blog.id}`}>{blog.title}-{blog.author}</Link>   
                     {/* <CountButton blogId = {blog.id} /> */}
                    </li>
                </ul>
            )}
        </div>
       
        );
    }
    


const mapStateToProps = state =>{
    return {blogs: state.blogs}
}

export default connect(mapStateToProps)(BlogList);


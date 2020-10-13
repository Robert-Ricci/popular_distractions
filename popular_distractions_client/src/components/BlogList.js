import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
    return (
        <div className ="blog-list">
            <h1>Blog List:</h1>
            {console.log('blog', blogs)}
            {blogs.map((blog) => 
                <ul key={blog.id}>
                    <li >
                     < Link key={blog.id} to={`/blogshow/${blog.id}`}>{blog.title}-{blog.author}</Link>   
                    </li>
                </ul>
            )}
        </div>
    );
};

const mapStateToProps = state =>{
    return {blogs: state.blogs}
}

export default connect(mapStateToProps)(BlogList);



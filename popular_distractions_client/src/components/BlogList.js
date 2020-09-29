import React from 'react';
import { connect } from 'react-redux';

const BlogList = ({ blogs }) => {
    return (
        <div>
            <h1>Blog List:</h1>
            {blogs.map((blog, index) => 
                <ul>
                    <li key={index}>
                        {blog.title}-{blog.author}
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
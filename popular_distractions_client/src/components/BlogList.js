import React from 'react';
import { connect } from 'react-redux';

const BlogList = ({ blogs }) => {
    return (
        <div>
            <h1>Blog List:</h1>
            {console.log('blog', blogs)}
            {blogs.map((blog, index) => 
                <ul key={index}>
                    <li >
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
import React from 'react';
import { connect } from 'react-redux';

const BlogList = ({ blogs }) => {
    return (
        <div>
            {blogs.map(blog => {
                <ul>
                    <li key={blog.id}>
                        {blog.title}
                    </li>
                </ul>
            }

            )}
        </div>
    );
};

const mapStateToProps = state =>{
    return {blogs: state.blogs}
}

export default connect(mapStateToProps)(BlogList);
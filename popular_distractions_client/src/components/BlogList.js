import React from 'react';
import { connect } from 'react-redux';

const BlogList = ({ blogs }) => {
    return (
        <div>
            list
            {blogs.map((blog, index) => {
                <ul>
                    <li key={index}>
                        {blog.title}-{blog.author}
                    </li>
                </ul>
            })}
        </div>
    );
};

const mapStateToProps = state =>{
    return {blogs: state.blogs}
}

export default connect(mapStateToProps)(BlogList);
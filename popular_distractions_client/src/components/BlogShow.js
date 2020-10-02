import React from 'react';
import { connect } from 'react-redux';

const BlogShow = ({ blogs }) => {
    return (
        <div>
            {blogs.map((blog, index) => 
                <ul key={index}>
                    <li >
                     <h1>{blog.title}</h1>
                     <p>{blog.content}</p>
                     <h3>{blog.author} </h3>
                    </li>
                </ul>
            )}
        </div>
    );
};

const mapStateToProps = state =>{
    return {blogs:state.blogs}
}
export default connect(mapStateToProps)(BlogShow);
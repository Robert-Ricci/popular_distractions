import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
    return (
        <div>
            <h1>Blog List:</h1>
            {console.log('blog', blogs)}
            {blogs.map((blog, index) => 
                <ul key={index}>
                    <li >
                     < Link to='/blogshow'>{blog.title}-{blog.author}</Link>   
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


// const renderBlogs = Object.keys(blogs).map(blogID =>
//     <Link key={blogID} to={`/blogs/${blogID}`}>{blogs[blogID].title}</Link>
//   );
 
//   return (
//     <div>
        
//         <ul>
//         <br />
//         <li>{renderBlogs}</li>
//         </ul>
      
//     </div>
//   );
// };
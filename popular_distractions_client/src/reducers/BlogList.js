// // import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/button';
// import React, { useState } from 'react';

// const BlogList = ({ blogs }) => {
    
//    let count = 0

//     const handleClick = () => {
//         return  count += 1
//      }
    
    
    
//     return (

       
//         <div className ="blog-list">
//             <h1>Blog List:</h1>
//             {blogs.map((blog) => 
//                 <ul key={blog.id}>
//                     <li >
//                      < Link key={blog.id} to={`/blogshow/${blog.id}`}>{blog.title}-{blog.author}</Link>   
//                      <Button onClick={() => handleClick(count +1)}> Click me!{count} </ Button>
//                     </li>
//                 </ul>
//             )}
//         </div>
//     );
// };

// const mapStateToProps = state =>{
//     return {blogs: state.blogs}
// }

// export default connect(mapStateToProps)(BlogList);



import React from 'react';
import { connect } from 'react-redux';

const BlogList = ({ blogs }) => {
    return (
        <div>
            
           list
        </div>
    );
};

const mapStateToProps = state =>{
    return {blogs: state.blogs}
}

export default connect(mapStateToProps)(BlogList);
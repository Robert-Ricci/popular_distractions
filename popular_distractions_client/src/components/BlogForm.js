import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addBlogs }from '../actions/blogActions.js';

class BlogForm extends Component {
   
     state = {
        author: '',
        title: '',
        content: '',
        date: ''
    }

    handleSubmit= e => {
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }

   handleSubmit = e =>{
    e.prevent.default()
    this.props.addBlogs(state)
   }
   

    render() {
        return (
            
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type='text' value={this.props.name} onChange={this.handleChange} name='name'></input>
                    <br />

                    <label>Titlel:</label>
                    <input type='text' value={this.props.title} onChange={this.handleChange} name='title'></input>
                    <br />

                    <label>Content:</label>
                    <textarea  type='text' value={this.props.content} onChange={this.handleChange} name='content'></textarea>
                    <br/>

                    <input type="submit"></input>
                </form>
            
        );
    }
}

export default connect(null, {addBlogs})(BlogForm);
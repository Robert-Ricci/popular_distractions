import React, { Component } from 'react';

class BlogForm extends Component {
   
     state = {
        author: '',
        title: '',
        content: '',
        date: ''
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

                </form>
            
        );
    }
}

export default BlogForm;
import React, { Component } from 'react';

class BlogForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Name:</label>
                    <input type='text' value={this.props.name} onChange={this.handleChange} name='name'></input>
                    <br />

                    <label>Titlel:</label>
                    <input type='text' value={this.props.title} onChange={this.handleChange} name='title'></input>
                    <br />
                    
                    <label>Content:</label>
                    <textarea  type='text' value={this.props.content} onChange={this.handleChange} name='content'></textarea>

                </form>
            </div>
        );
    }
}

export default BlogForm;
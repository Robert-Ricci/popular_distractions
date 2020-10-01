import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addBlog } from '../actions/blogActions';

class BlogForm extends Component {
   
     state = {
        author: '',
        title: '',
        content: '',
        date: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]:value
        })
    }

   handleSubmit = e =>{
    e.preventDefault()
    this.props.addBlog(this.state)
   }
   

    render() {
        console.log(this.state)
        
        return (
           
                <form onSubmit={event => this.handleSubmit(event)}>
                    <br />
                    <label>Author Name:</label>
                    <input type='text' value={this.state.author} onChange={event => this.handleChange(event)} name='author' />
                    <br />

                    <label>Title:</label>
                    <input type='text' value={this.state.title} onChange={event => this.handleChange(event)} name='title' />
                    <br />

                    <label>Content:</label>
                    <textarea type='text' value={this.state.content} onChange={event => this.handleChange(event)} name='content' />
                    <br/>

                    <label>Date:</label>
                    <input type='text' value={this.state.date} onChange={event => this.handleChange(event)} name='date' />
                    <br />

                    <input type="submit"  value="submit" />
                </form>
            
        );
    }
}

export default connect(null, {addBlog})(BlogForm);

// new Date().toLocaleString()
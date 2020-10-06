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
    this.setState({
        author:'',
        title:'',
        content:'',
        date:''
      })
   }
   

    render() {  
        return (
           
                <form className="blog-form" onSubmit={event => this.handleSubmit(event)}>
                    <br />
                    <label>Author Name:</label><br />
                    <input type='text' value={this.state.author} onChange={event => this.handleChange(event)} name='author' />
                    <br />

                    <label>Title:</label><br />
                    <input type='text' value={this.state.title} onChange={event => this.handleChange(event)} name='title' />
                    <br />

                    <label>Content:</label><br />
                    <textarea type='text' value={this.state.content} onChange={event => this.handleChange(event)} name='content' rows={25} cols={100} wrap="hard" />
                    <br/>

                    <label>Date:</label><br />
                    <input type='text' value={this.state.date} onChange={event => this.handleChange(event)} name='date' />
                    <br />
                    <br />
                    <input type="submit"  value="submit" />
                </form>
            
        );
    }
}

export default connect(null, {addBlog})(BlogForm);

// new Date().toLocaleString()
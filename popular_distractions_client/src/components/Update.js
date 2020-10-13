import React, { Component } from 'react';
import { connect } from 'react-redux';
// import BlogShow from './BlogShow'
import { fetchBlog, updateBlog } from '../actions/blogActions';

class Update extends Component {
   
     state = {
        author: '',
        title: '',
        content: '',
        date: ''
    }
        
    componentDidMount(){
        this.findBlog()
    }

    findBlog = () => {
        console.log("mount", this.props
        )
      
        // const blog = this.props.blogs.find(blog => blog.id === parseInt(this.props.match.params.id))
       
        // this.setState({
        //     author: blog.author,
        //     title: blog.title,
        //     content: blog.content,
        //     date: blog.date
        // })
    }

  

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]:value
        })
    }

   handleSubmit = e =>{
    e.preventDefault()
    this.props.updateBlog(this.state)
    // this.setState({
    //     author:'',
    //     title:'',
    //     content:'',
    //     date:''
    //   })
   }
   

    render() {  
        // console.log(this.props.match.params.id)
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

const mapStateToProps = state =>{
    return {blogs: state.blogs}
}

export default connect(mapStateToProps, { fetchBlog, updateBlog})(Update);


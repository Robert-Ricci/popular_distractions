export const fetchBlogs = () => {
    return dispatch => {
        fetch('http://localhost:3000/blogs')
        .then(resp => resp.json())
        .then(blogs => dispatch({ type: 'FETCH_BLOGS', payload: blogs}))
    }
}

export const fetchBlog = (id) => {
    debugger;
    return dispatch => {
        fetch(`http://localhost:3000/blogs/${id}` )
        .then(resp => resp.json())
        .then(blog => console.log('action', blog))
    }
}

export const addBlog = (blog) =>{
    return dispatch =>{
        fetch('http://localhost:3000/blogs', {
            method:'POST',
            body: JSON.stringify(blog),
            headers:{'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(blog => dispatch({type: 'ADD_BLOG', payload:blog}))
        window.location.href = "http://localhost:3001/blogs"
    }
}

export const updateBlog = (blog) =>{
    return dispatch =>{
        fetch('http://localhost:3000/blogs', {
            method:'PATCH',
            body: JSON.stringify(blog),
            headers:{'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(blog => dispatch({type: 'UPDATE_BLOG', payload:blog}))
        window.location.href = "http://localhost:3001/blogs"
    }
}

export const deleteBlog = (id) => {
    return dispatch => {
        dispatch({type: 'DELETE_BLOG', payload:id})
        fetch(`http://localhost:3000/blogs/${id}`, {
            method: 'DELETE'
          })
          window.location.href = "http://localhost:3001/blogs"
    }
}
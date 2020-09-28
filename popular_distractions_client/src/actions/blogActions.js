export const fetchBlogs = () => {
    return dispatch => {
        fetch('127.0.0.1:3000/blogs')
        .then(resp => resp.json())
        .then(blogs => dispatch({ type: 'FETCH_BLOGS', payload: blogs}))
    }
}

export const addBlogs = (blog) =>{
    return dispatch =>{
        fetch('127.0.0.1:3000/blogs', {
            method:'POST',
            body: JSON.stringify(blog),
            headers:{'Content-Type': 'application/json'}
        })
        .then(resp => resp.json)
        .then(blog => dispatch({type: 'ADD_BLOG', payload:blog}))
    }
}
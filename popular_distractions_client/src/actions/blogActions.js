export const fetchBlogs = () => {
    return dispatch => {
        fetch('127.0.0.1:3000/blogs')
        .then(resp => resp.json())
        .then(blogs => dispatch({ type: 'FETCH_BLOGS', payload: blogs}))
    }
}
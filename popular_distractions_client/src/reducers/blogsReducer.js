export const blogsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_BLOGS':
            return action.payload
        case 'ADD_BLOG':
            return [...state, action.payload]
        case 'DELETE_BLOG':
            return {blogs: state.blogs.filter(blog => blog.id !== action.payload)}
        default:
            return state
    }
}




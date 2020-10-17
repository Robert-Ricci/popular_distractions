export const blogsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_BLOGS':
            return action.payload
        case 'FETCH_BLOG':
            console.log(action.payload)
            return action.payload
        case 'ADD_BLOG':
            return [...state, action.payload]
        case 'UPDATE_BLOG':
            return [...state, action.payload]
        case 'DELETE_BLOG':
            const blogs =  state.filter(blog => blog.id !== action.payload)
            return  [...state, blogs ];
          
        default:
            return state
    }
}




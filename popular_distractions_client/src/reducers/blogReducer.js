export const blogReducer = (state =[], action) =>{
    switch(action.type){
        case "FETCH_BLOG":
            return action.payload
            default:
                return state
    }

}
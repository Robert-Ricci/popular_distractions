import { combineReducers } from 'redux';

import { blogsReducer } from './blogsReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
    blogs: blogsReducer,
    users: usersReducer
})



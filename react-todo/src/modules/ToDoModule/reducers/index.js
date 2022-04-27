import { combineReducers } from 'redux'
import todosReducer from '../ToDoSlice';

const reducer = combineReducers({
    toDo: todosReducer,
});

export default reducer;

import { combineReducers } from "redux";

import filtersSlice from "../components/Filters/filtersSlice";
import todosSlice from "../components/TodoList/fodosSlice";

// const rootReducer = (state = {}, action)=>{
//     return {
//         filters: filtersReducer(state.filters,action),
//         todoList : todosReducer(state.todoList,action),
//     }
// }

const rootReducer = combineReducers({
    filters: filtersSlice,
    todoList : todosSlice
})

export default rootReducer;
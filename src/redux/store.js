// import { createStore } from "redux"; 
// import rootReducer from "./reducer";
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhacers = composeWithDevTools();

// const store = createStore(rootReducer, composeEnhacers);
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../components/TodoList/todosSlice";
import filtersSlice from "../components/Filters/filtersSlice";

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todosSlice.reducer
    }
});

export default store;
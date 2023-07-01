// const initState = {
//     search: '',
//     status: 'All',
//     priority: []
// }

// const filtersReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload,
//             }
//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload,
//             }
//         case 'filters/prioritiesFilterChange':
//             return {
//                 ...state,
//                 priority: action.payload,
//             }
//         default:
//             return state;
//     }
// }

// export default filtersReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'filters',
    initialState : {
        search: '',
        status: 'All',
        priority: []
    },
    reducers : {
        searchFilterChange : (state, action) => {
            // mutation : thay đổi trực tiếp nhưng hoạt động giống thay đổi gián tiếp
            state.search = action.payload;
        }, // => {type : 'filters/searchFilterChange'}
        statusFilterChange : (state, action) => {
            state.status = action.payload;
        },
        prioritiesFilterChange : (state, action) => {
            state.priority = action.payload;
        }
    }
});
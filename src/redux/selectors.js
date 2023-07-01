import { createSelector } from "@reduxjs/toolkit";


export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priority;
export const todoListSelector = (state) => state.todoList;
// reselector

export const todosRemaindingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    filterPrioritySelector,
    searchTextSelector,
    (todoList, status, priorities,searchText) => {
        return todoList.filter((todo) => {
            if (status === 'All')
                return priorities.length ? todo.name.includes(searchText) && priorities.includes(todo.priority) : todo.name.includes(searchText);
            return todo.name.includes(searchText) && (status === 'Completed' ?
                todo.completed :
                !todo.completed) &&(priorities.length ? priorities.includes(todo.priority) : true);
        });
    })
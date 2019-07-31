import { VisibilityFilters } from "./Constants";
import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from "./Actions";
import { combineReducers } from "redux";


const todos = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO: 
            console.log('adding...')
            console.log('new result', [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ])
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        default:
            return state
    }
}

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

//defaults to initialstate if state is undefined
/*
function todoApp(state = initialState, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}
*/

//equivalent to the above
export const todoApp = combineReducers({
    visibilityFilter: visibilityFilter,
    todos: todos
})
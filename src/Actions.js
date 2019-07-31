
/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * action creators
 */
export function addTodo(text) {
    console.log('adding new todo with text', text)
    return { type: ADD_TODO, text }
}
  
export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}
  
export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}
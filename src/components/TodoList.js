import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    console.log('props', props)
    return (
        <ul>
            {props.todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => props.onTodoClick(index)} />
            ))}
        </ul>
    )
}

export default TodoList
import * as React from 'react'
import { addTodo, toggleTodo, setVisibilityFilter } from './Actions';
import { VisibilityFilters } from './Constants';
import AddTodo from './containers/AddTodo';
import { VisibleTodoList } from './containers/VisibleTodoList';
import Footer from './Footer';
import { store } from '.';

export default class App extends React.Component {
    constructor() {
        super()

        //
        console.log('getState()', store.getState())
        const unsubscribe = store.subscribe(() => console.log(store.getState()))

        // Dispatch some actions
        store.dispatch(addTodo('Learn about actions'))
        store.dispatch(addTodo('Learn about reducers'))
        store.dispatch(addTodo('Learn about store'))
        store.dispatch(toggleTodo(0))
        store.dispatch(toggleTodo(1))
        store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

        // Stop listening to state updates
        unsubscribe()
        
    }

    shouldAlwaysReturnALuckyNumber = () => {
        return 7
    }

    render() {
        return (
            <div>
                Hello World {process.env.environment}
                <AddTodo/>
                <VisibleTodoList>Hi world</VisibleTodoList>
                <Footer/>
            </div>
        )
    }
}
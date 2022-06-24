import { createContext, useEffect, useReducer } from 'react'
import todoReducer from '../Reducer/Todo.reducer'

export const TodoContext = createContext()
export const DispatchContext = createContext()

export function TodoProvider(props) {
    const initialTodoArray = JSON.parse(window.localStorage.getItem('todoArray') || "[]");
    const [todoArray, dispatch] = useReducer(todoReducer, initialTodoArray)

    useEffect(() => {
        window.localStorage.setItem('todoArray', JSON.stringify(todoArray))
    }, [todoArray])
    return <TodoContext.Provider value={todoArray}>
        <DispatchContext.Provider value={dispatch}>
            {props.children}
        </DispatchContext.Provider>
    </TodoContext.Provider>
}
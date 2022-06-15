import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext()

export function TodoProvider(props) {
    const initialTodoArray = JSON.parse(window.localStorage.getItem('todoArray') || "[]");
    const [todoArray, setTodoArray] = useState(initialTodoArray)

    function toggleTodoComplete(id) {
        const updateTodo = todoArray.map(todo => {
            if (id === todo.id) {
                return { ...todo, completed: !todo.completed }
            } else {
                return todo
            }
        }
        )
        setTodoArray(updateTodo)
    }
    function addTodo(task) {
        setTodoArray([...todoArray, { id: uuidv4(), task: task, completed: false }])
    }

    function deleteTodo(id) {
        const updatedTodo = todoArray.filter(todo => todo.id !== id)
        setTodoArray(updatedTodo)
    }

    function editTodo(id, editedTask) {
        const editedTodoArray = todoArray.map(todo =>
            todo.id === id ? { ...todo, task: editedTask } : todo
        )
        setTodoArray(editedTodoArray)
    }

    useEffect(() => {
        window.localStorage.setItem('todoArray', JSON.stringify(todoArray))
    }, [todoArray])
    return <TodoContext.Provider value={{ todoArray, toggleTodoComplete, deleteTodo, addTodo, editTodo }}>
        {props.children}
    </TodoContext.Provider>
}
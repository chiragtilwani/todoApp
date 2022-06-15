import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext()

export function TodoProvider(props) {
    const [todoArray, setTodoArray] = useState([
        { id: 1, task: 'wash dish', completed: false },
        { id: 2, task: 'drive car', completed: true },
        { id: 3, task: 'eat apples', completed: false }
    ])

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
    function addTodo(task){
        setTodoArray([...todoArray,{id:uuidv4(),task:task, completed:false}])
    }

    function deleteTodo(id) {
        const updatedTodo=todoArray.filter(todo =>todo.id!==id)
        setTodoArray(updatedTodo)
    }

    function editTodo(id,editedTask){
        const editedTodoArray=todoArray.map(todo=>
            todo.id===id?{...todo,task:editedTask}:todo
        )
        setTodoArray(editedTodoArray)
    }
    return <TodoContext.Provider value={{ todoArray, toggleTodoComplete,deleteTodo,addTodo,editTodo }}>{props.children}</TodoContext.Provider>
}
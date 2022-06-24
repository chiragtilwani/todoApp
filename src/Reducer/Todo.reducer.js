import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return [...state, { id: uuidv4(), task: action.task, completed: false }]

        case "Remove":
            return state.filter(todo => todo.id !== action.id)

        case "toggleTodoComplete":
            return state.map(todo => {
                if (action.id === todo.id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo
                }
            }
            )
        case "Edit":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, task: action.newTask } : todo
            )
        default:
            return state
    }
}

export default reducer
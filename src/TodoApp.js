import Paper from '@mui/material/Paper';
import { useContext, useState } from 'react';
import { TodoContext } from './context/Todo.context'
import { DispatchContext } from './context/Todo.context'
import List from '@mui/material/List';
import Todo from './Todo'
import emptyList from './images/emptyList.svg'
import AddTodoForm from './AddTodoForm'
import useStyles from './styles/TodoAppStyles';




const style = {
    width: '100%',
    maxWidth: 360,
    maxHeight: '75vh',
    bgcolor: 'background.paper',
    padding: '0',
    overflowY: 'scroll',
};

function TodoApp() {
    const classes = useStyles()
    const [task, setTask] = useState("")
    const todoArray= useContext(TodoContext)
    const dispatch = useContext(DispatchContext)

    function handleChange(evt) {
        setTask(evt.target.value)
    }

    function handleAddTodo(evt) {
        evt.preventDefault()
        dispatch({ type: "Add", task: task })
        setTask("")
    }

    return (
        <>
            <div className={classes.Navbar}>TodoApp</div>
            <div className={classes.container}>
                <Paper className={classes.paper1}>
                    <AddTodoForm classes={classes} handleAddTodo={handleAddTodo} handleChange={handleChange}
                        task={task} />
                </Paper>
                <Paper className={classes.paper2}>
                    {todoArray.length === 0 ? <img src={emptyList} alt="empty list" className={classes.img} /> : <List sx={style} component="nav" aria-label="mailbox folders" className={classes.list}>
                        {todoArray.map(todo =>
                            <Todo key={todo.id} {...todo} />
                        )}
                    </List>}
                </Paper>
            </div>
        </>
    )
}

export default TodoApp
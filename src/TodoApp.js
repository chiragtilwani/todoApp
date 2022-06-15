import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useContext,useState } from 'react';
import { TodoContext } from './context/Todo.context'
import List from '@mui/material/List';
import Todo from './Todo'



const useStyles = makeStyles({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    Navbar: {
        width: '100%',
        height: '4rem',
        backgroundColor: '#1d3557',
        color: '#f1faee',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '3rem',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        fontFamily: 'Roboto Slab'
    },
    textField: {
        width: '70%',
    },
    paper1: {
        width: '50%',
        minHeight: '2rem',
        margin: '2rem'
    },
    paper2: {
        width: '50%',
    },
    button: {
        margin: '1rem!important',
        fontSize: '1.2rem !important',
        fontWeight: 'bold !important',
        backgroundColor: '#1d3557 !important',
        color: '#f1faee !important',
    },
    span: {
        marginLeft: '2rem'
    },
    list:{
        maxWidth:'100% !important',
        '&::-webkit-scrollbar':{
            display:'none'
        }
    },
    form:{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
    }
})

const style = {
    width: '100%',
    maxWidth: 360,
    maxHeight:'75vh',
    bgcolor: 'background.paper',
    padding:'0',
    overflowY: 'scroll',
};

function TodoApp() {
    const classes = useStyles()
    const [task,setTask] = useState("")
    const { todoArray,toggleTodoComplete,deleteTodo,addTodo,editTodo } = useContext(TodoContext)

    function handleChange(evt){
        setTask(evt.target.value)
    }

    function handleAddTodo(evt){
        evt.preventDefault()
        addTodo(task)
        setTask("")
    }

    return (
        <>
            <div className={classes.Navbar}>TodoApp</div>
            <div className={classes.container}>
                <Paper className={classes.paper1}>
                    <form onSubmit={handleAddTodo} className={classes.form}>
                    <TextField id="standard-basic" label="Add Todo" variant="standard" className={classes.textField} required value={task} onChange={handleChange}/>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" className={classes.button} type="submit">Add</Button>
                    </Stack>
                    </form>
                </Paper>
                <Paper className={classes.paper2}>
                <List sx={style} component="nav" aria-label="mailbox folders" className={classes.list}>
                    {todoArray.map(todo =>
                        <Todo key={todo.id} {...todo}  toggleTodoComplete={toggleTodoComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
                    )}
                </List>
                </Paper>
            </div>
        </>
    )
}

export default TodoApp
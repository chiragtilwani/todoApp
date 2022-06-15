import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles'
import { FiEdit2 } from 'react-icons/fi';
import { FaTrashAlt } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const useStyles = makeStyles({
    paper2: {
        width: '50%',
        height: '5rem !important',
        display: 'flex !important',
        justifyContent: 'space-between !important',
        alignItems: 'center !important',
        margin: '0 1rem',
        border: '.2rem solid',
    },
    span: {
        marginLeft: '1rem',
    },
    deleteEdit: {
        width: '6%',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1.4rem',
    },
    hoverEffect: {
        transitionDuration: '200ms',
        '&:hover': {
            color: '#e63946',
            transform: 'scale(1.5)'
        }
    },
    editForm: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
    },
    editButton: {
        margin: '1rem!important',
        fontSize: '1.2rem !important',
        fontWeight: 'bold !important',
        backgroundColor: '#1d3557 !important',
        color: '#f1faee !important',
    }
})

function Todo(props) {
    const classes = useStyles()
    const { id, task, completed, toggleTodoComplete, deleteTodo,editTodo } = props
    const [showEditForm, setShowEditForm] = useState(false)
    const [editedTask, setEditedTask] = useState(task)
    function handleClick() {
        toggleTodoComplete(id)
    }

    function handleDeleteClick(evt) {
        evt.stopPropagation()
        deleteTodo(id)
    }
    function handleEditClick(evt) {
        evt.stopPropagation()
        setShowEditForm(!showEditForm)
    }

    function handleChange(evt){
        setEditedTask(evt.target.value)
    }
    function handleSubmit(evt) {
        evt.preventDefault()
        editTodo(id,editedTask)
        setShowEditForm(!showEditForm)
    }
    return <>
        <ListItem className={classes.paper2} button style={{ width: '100%' }} onClick={showEditForm ? null : handleClick}>
            <ListItemText className={classes.span} style={{ textDecoration: completed ? 'line-through' : 'none', display: showEditForm ? 'none' : '' }}>{task}</ListItemText>

            <form className={classes.editForm} style={{ display: showEditForm ? '' : 'none' }} onSubmit={handleSubmit}>
                <TextField id="standard-basic" variant="standard" required className={classes.textField} value={editedTask} onChange={handleChange}/>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" className={classes.editButton} type="submit">Edit</Button>
                </Stack>
            </form>

            <div className={classes.deleteEdit} style={{ display: showEditForm ? 'none' : '' }}>
                <FaTrashAlt className={classes.hoverEffect} onClick={handleDeleteClick} />
                <FiEdit2 className={classes.hoverEffect} onClick={handleEditClick} />
            </div>

        </ListItem>
        <Divider/>
    </>

}

export default Todo;


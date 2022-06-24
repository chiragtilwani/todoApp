import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles'
import { FiEdit2 } from 'react-icons/fi';
import { FaTrashAlt } from 'react-icons/fa';
import { useState, useContext,memo } from 'react'
import Sizes from './Sizes'
import { DispatchContext } from './context/Todo.context';
import EditForm from './EditForm'



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
        [Sizes.down('lg')]: {
            width: '10%'
        },
        [Sizes.down('sm')]: {
            width: '10%'
        },
        [Sizes.down('sm')]: {
            width: '12%'
        }
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
    const { id, task, completed } = props
    const [showEditForm, setShowEditForm] = useState(false)
    const [editedTask, setEditedTask] = useState(task)
    const dispatch = useContext(DispatchContext)
    function handleClick() {
        dispatch({ type: 'toggleTodoComplete', id: id })
    }

    function handleDeleteClick(evt) {
        evt.stopPropagation()
        dispatch({ type: 'Remove', id: id })
    }
    function handleEditClick(evt) {
        evt.stopPropagation()
        setShowEditForm(!showEditForm)
    }

    function handleChange(evt) {
        setEditedTask(evt.target.value)
    }
    function handleSubmit(evt) {
        evt.preventDefault()
        dispatch({ type: 'Edit', id: id, newTask: editedTask })
        setShowEditForm(!showEditForm)
    }
    console.log(task)
    return <>
        <ListItem className={classes.paper2} button style={{ width: '100%' }} onClick={showEditForm ? null : handleClick}>
            <ListItemText className={classes.span} style={{ textDecoration: completed ? 'line-through' : 'none', display: showEditForm ? 'none' : '' }}>{task}</ListItemText>

            <EditForm classes={classes} showEditForm={showEditForm} handleSubmit={handleSubmit} editedTask={editedTask} handleChange={handleChange} />

            <div className={classes.deleteEdit} style={{ display: showEditForm ? 'none' : '' }}>
                <FaTrashAlt className={classes.hoverEffect} onClick={handleDeleteClick} />
                <FiEdit2 className={classes.hoverEffect} onClick={handleEditClick} />
            </div>

        </ListItem>
        <Divider />
    </>

}

export default memo(Todo);


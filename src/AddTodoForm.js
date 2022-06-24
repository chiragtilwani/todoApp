import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function AddTodoForm(props) {
    const {classes,handleAddTodo,handleChange,task} =props
    return (<form onSubmit={handleAddTodo} className={classes.form}>
        <TextField id="standard-basic" label="Add Todo" variant="standard" className={classes.textField} required value={task} onChange={handleChange} />
        <Stack spacing={2} direction="row">
            <Button variant="contained" className={classes.button} type="submit">Add</Button>
        </Stack>
    </form>)
}

export default AddTodoForm
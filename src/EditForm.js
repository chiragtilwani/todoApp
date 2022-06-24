import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function EditForm(props) {
    const { classes, showEditForm, handleSubmit, editedTask, handleChange } = props
    return <form className={classes.editForm} style={{ display: showEditForm ? '' : 'none' }} onSubmit={handleSubmit}>
        <TextField id="standard-basic" variant="standard" required className={classes.textField} value={editedTask} onChange={handleChange} />
        <Stack spacing={2} direction="row">
            <Button variant="contained" className={classes.editButton} type="submit">Edit</Button>
        </Stack>
    </form>
}

export default EditForm;
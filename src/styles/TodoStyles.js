import Sizes from '../Sizes'
import { makeStyles } from '@mui/styles'

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

export default useStyles
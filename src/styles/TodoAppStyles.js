import Sizes from '../Sizes'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '.2rem solid'
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
        margin: '2rem',
        [Sizes.down('sm')]: {
            width: '70%'
        },
        [Sizes.down('xs')]: {
            width: '95%'
        }
    },
    paper2: {
        width: '50%',
        maxHeight: '75vh',
        display: 'flex',
        justifyContent: 'center',
        [Sizes.down('lg')]: {
        },
        [Sizes.down('sm')]: {
            width: '70%'
        },
        [Sizes.down('xs')]: {
            width: '95%',
            height: '80vh',
            maxHeight: '85vh !important',
        }
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
    list: {
        maxWidth: '100% !important',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    form: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    img: {
        width: '75%',
    }
})

export default useStyles
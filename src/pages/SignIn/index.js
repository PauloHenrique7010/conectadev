import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
    },
    left: {
        background: 'blue',
        flexBasis: '58%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        background: 'yellow',
        flexBasis: '42%',
    },
    form:{
        display: 'flex',
        flexDirection: 'column',
        margin: '64px 32px',
        alignItems: 'center',
    },
}));

export default function SignIn() {
    const classes = useStyles();
    return (
        /* Flex Container */
        <div className={classes.root}>
            {/* Flex item container*/}
            <div className={classes.left}>
                <Typography style={{ color: '#fff', fontsize: 35, lineHeight: '45px' }}>
                    <strong>Simplificando a forma de conectar desenvolvedor de software!</strong>
                </Typography>
                <Typography variant="body2" style={{ color: 'rgb(2555,2555,2555, 0.7', marginTop: 30, fontSize: 15, lineHeight: '30px' }}>
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
                </Typography>
            </div>
            {/* Flex item */}
            <div className={classes.right}>
                <form className={classes.form}>
                    <h4>Acesso</h4>
                    <input type="text" />
                    <input type="text" />                    
                </form>
            </div>

        </div>
    );
}

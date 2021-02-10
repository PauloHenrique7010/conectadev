import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box, Avatar, Link, TextField, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexDirection: 'row',
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(/images/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        padding: theme.spacing(2),
        textAlign: "center"
    },
    avatar: {
        background: theme.pallete.primary.main,
        marginBottom: theme.spacing(1),
    },
    button: {
        marginTop: theme.spacing(1),

    },
    form: {
        margin: theme.spacing(2, 4),

    },
}));
function Copyright(){
    return(
         <Typography variant="body2" align="center">
             {'Copyright º'}
             <a color="inherit" href="https://google.com"> Google</a>
             {' '}
             {new Date().getFullYear()}
        </Typography>
    );
}

export default function SignIn() {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <Grid container className={classes.root}>
            <Grid
                item
                container                
                direction="column"
                justify="center"
                alignItems="center"
                md={7}
                className={classes.image}>

                <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px' }}>
                    <strong>Simplificando a forma de conectar desenvolvedor de software!</strong>
                </Typography>                 
                <Typography variant="body2" style={{ color: 'rgb(2555,2555,2555, 0.7', marginTop: 30, fontSize: 15, lineHeight: '30px' }}>
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
                </Typography>
            </Grid>
            <Grid item md={5}>
                <Box display="flex" flexDirection="column" alignItems="center" m={8}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography variant="h5">
                        Acesso
                </Typography>
                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autocomplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={() => navigate('/')}>
                            Entrar
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link>Esqueceu sua senha?</Link>
                            </Grid>
                            <Grid item>
                                <Link>Não tem uma conta? Registre-se</Link>
                            </Grid>
                        </Grid>
                    </form>
                    <Copyright />
                </Box>
            </Grid>
        </Grid>
    );
}

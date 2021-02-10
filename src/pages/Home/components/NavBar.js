import { makeStyles } from '@material-ui/core/styles';
import { Paper, 
         Button, 
         ListSubheader,
         ListItem,
         ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        padding:theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2),

    },
    button:{
        width:'100%'
    }
}));

const tags = [
    { id: 1, name: 'ReactJS'},
    { id: 2, name: 'Javascript'},
    { id: 3, name: 'DotNet'},
    { id: 4, name: 'PHP'},
    { id: 5, name: 'MaterialDesign'},
    { id: 6, name: 'WebDev'},
];

function NavBar(){
    const classes = useStyles();
    return(       
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.button}>Registrar Grátis</Button>
            <ListSubheader>{'Tags em alta'}</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`}/>
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir Mais Tags
            </ListItem>
        </Paper>
        
    );
}

export default NavBar;
// import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Feed from './components/Feed';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {       
        height: '100vh',
        padding: 24,       
    },
    toolbar: {
        display: 'flex',
        minHeight: 64,
    }
});

function Home() {
    const classes = useStyles();

    return (
        <div classname={classes.root}>
            <Header />
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box display="flex">
                        <NavBar />
                        <Feed />
                    </Box>
                </Container>



            </main>
        </div>
    );
}

export default Home;
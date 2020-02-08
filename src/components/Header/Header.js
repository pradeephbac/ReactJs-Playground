import React from 'react';
import { Route, useHistory  } from 'react-router-dom' 


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
 
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = ({ props }) => {
    return <HeaderBar />
}

const HeaderBar = () => {
    const classes = useStyles();
    const history = useHistory()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton  edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}  onClick={() => { history.push('/') }} >Python Playground</Typography>
                        <Route path="/" render={(props) => <LoginButton {...props} />} />
                        <Route path="/" render={(props) => <SignUpButton {...props}/>} />
                </Toolbar>
            </AppBar>
        </div>
    );
}

 
 
const LoginButton = ({ history }) => (
    <Button color="inherit" onClick={() => history.push('/signin')}>Login</Button>
)

const SignUpButton = ({ title, history }) => (
    <Button color="inherit" onClick={() => history.push('/signup')}>SignUp</Button>
)


export default Header;
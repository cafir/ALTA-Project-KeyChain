import React, { useEffect } from "react";
//style
import { Container, AppBar, Typography, Grow, Grid} from "@material-ui/core"
import useStyles from './styles.js'

//redux
import { useDispatch } from "react-redux";

//action
import { getHolders } from "./actions/holders.js"
 
//component
import Form from "./components/Form/Form";
import Holders from "./components/Holders/Holders";


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHolders());
    }, [dispatch])

    return (
        <Container maxWidth="sm">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Navbar</Typography>
            </AppBar>
            <Grow in>
                <Container align="center">
                    <Form />
                    <br/>
                    <br/>
                    <Holders/>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
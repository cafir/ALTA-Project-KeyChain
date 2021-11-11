import React, { useState, useEffect } from "react";

import { TextField, Button, Typography, Paper, Container } from "@material-ui/core";
import useStyles from './styles'

import { useDispatch } from "react-redux";
import { createHolder } from "../../actions/holders";



const Form = () => {
    const [holderData, setHolderData] = useState({
        name: '', password: '',  tags: ''
    });
    const dispatch = useDispatch();

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createHolder(holderData))
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating Password Holder</Typography>
                <TextField name="name" variant="outlined" label="Holder Name" fullWidth value={holderData.name} onChange={(e) => setHolderData({ ...holderData, name: e.target.value })}/>
                <TextField name="password" variant="outlined" label="Password" fullWidth value={holderData.password} onChange={(e) => setHolderData({ ...holderData, password: e.target.value })}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={holderData.tags} onChange={(e) => setHolderData({ ...holderData, tags: e.target.value.split(',') })}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;
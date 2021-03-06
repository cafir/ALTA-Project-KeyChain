import React from "react";
import { Container, CircularProgress, Grid} from "@material-ui/core";
import { useSelector } from "react-redux";

import Holder from "./Holder/Holder";
import useStyles from './styles'

const Holders = () => {
    const holders = useSelector((state) => state.holders)
    const classes = useStyles();

    console.log(holders)

    return (
        !holders.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {holders.map((holder) => (
                    <Container key={holder.id} item xs={12} sm={6}>
                        <Holder holder={holder}/>
                    </Container>
                ))}
            </Grid>
        )
    )
}

export default Holders;
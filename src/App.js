import './App.css';
import {
    Grid,
    Paper,
    Button
} from '@material-ui/core';
import React from "react";
import {BrowserRouter, NavLink} from "react-router-dom";
import RouteController from "./Router/RouterController";

function App(props) {
    return <BrowserRouter>
        <Grid container>
            <Grid item xs={12}>
                <Paper elevation={5} className="paper">
                    <Grid container justify={"space-evenly"}>
                        <Grid item xs={4}>
                            <NavLink to={"/"} className={"navlink"}>
                                <Button variant={"contained"}>Shop</Button>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to={"/bucket"} className={"navlink"}>
                                <Button variant={"contained"}>Bucket</Button>
                            </NavLink>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <RouteController/>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={5} className="paper">
                    Footer
                </Paper>
            </Grid>
        </Grid>
    </BrowserRouter>

}

export default App;

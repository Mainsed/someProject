import '../App.css';
import {Grid, Paper, Typography, Button} from "@material-ui/core";
import React from "react";

const Shop = (props) => {
    const handleClick = (e) => {
        const id = parseInt(e.currentTarget.name)
        props.changeBucketState(id);
    }
    return <Grid container>
        <Grid item xs={12}>
            <Paper elevation={5} className="paper">
                <Grid container justify={"space-evenly"}>
                    {props.products.map((product, id) => {
                        return <Grid item xs={4} md={2} xl={1} key={id}>
                            <Paper elevation={8} className="product">
                                <Typography align={"center"} key={`name${id}`}>{product.name}</Typography>
                                <img src={product.picture} alt={product.name} key={`img${id}`}/>
                                <Typography align={"center"} key={`price${id}`}>Цена: {product.price}</Typography>
                                <Button variant={"contained"} name={id} onClick={handleClick} key={`button${id}`}>
                                    {product.inCart ? "Убрать из корзины" : "Добавить в корзину"}
                                </Button>
                            </Paper>
                        </Grid>
                    })}
                </Grid>
            </Paper>
        </Grid>
    </Grid>
}

export default Shop;
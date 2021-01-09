import '../App.css';
import {Grid, Paper, Typography, Button} from "@material-ui/core";
import React from "react";

const Bucket = (props) => {
    const incAmount = (e) => {
        props.incAmount(parseInt(e.currentTarget.name));
    }

    const decAmount = (e) => {
        props.decAmount(parseInt(e.currentTarget.name));
    }

    const deleteFromBucket = (e) => {
        debugger;
        props.changeBucketState(parseInt(e.currentTarget.name));
    }

    const sumPrices = (products) => {
        let price = 0;
        for (let i = 0; i < products.length; i++) {
            price += products[i].inCart ? products[i].totalPrice : 0;
        }
        return price;
    }

    const total = sumPrices(props.products);

    return <Grid container>
        <Grid item xs={12}>
            <Paper elevation={5} className="paper">
                <Typography variant={"h3"} align={"center"}>Корзина</Typography>
                <Typography variant={"h6"} align={"center"}>Выбраные товары</Typography>
                <Grid container justify={"center"}>
                    <Grid item xs={12} md={8} xl={6}>
                        {props.products.map((product, id) => {
                            return product.inCart ? (
                                <Grid item xs={12} key={id}>
                                    <Paper elevation={8} className="productBucket">
                                        <Grid container justify={"space-evenly"} alignItems={"center"}>
                                            <Grid item xs={3}>
                                                <Typography align={"center"}>{product.name}</Typography>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Typography align={"center"}>
                                                    <img src={product.picture} alt={product.name} key={`img${id}`}/>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Typography align={"center"}>Цена: {product.price}</Typography>
                                            </Grid>

                                            <Grid item xs={2}>
                                                <Grid container direction={"column"} justify={"center"}>
                                                    <Button size={"small"} onClick={incAmount} name={id}>ᐱ</Button>
                                                    <Typography align={"center"}>
                                                        {product.amount}
                                                    </Typography>
                                                    <Button size={"small"} onClick={decAmount} name={id}>ᐯ</Button>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Typography align={"center"}>
                                                    Всего: {product.totalPrice}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1}>
                                                <Button size={"small"} color={"secondary"} name={id} onClick={deleteFromBucket}>
                                                    X
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            ) : ''
                        })}
                    </Grid>
                </Grid>
                <Typography variant={"h6"} align={"center"}>Сумма: {total}</Typography>
            </Paper>
        </Grid>
    </Grid>
}

export default Bucket;
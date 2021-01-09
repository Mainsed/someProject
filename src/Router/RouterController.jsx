import {Route} from "react-router-dom";
import React from "react";
import Box from "@material-ui/core/Box";
import ShopContainer from "../Containers/ShopContainer";
import BucketContainer from "../Containers/BucketContainer";


class RouteController extends React.Component {
    render() {
        return (
            <Box>
                <Route exact path={'/'} render={() => <ShopContainer/>}/>
                <Route exact path={'/bucket'} render={() => <BucketContainer/>}/>
            </Box>
        )
    }
}

export default RouteController;

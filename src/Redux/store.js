import {combineReducers, createStore} from "redux";
import salesReducer from "./SaleReducer";


let reducers = combineReducers({
    sales: salesReducer,
})

let store = createStore(reducers);

export default store;
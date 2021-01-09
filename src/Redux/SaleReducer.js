let initialState = {
    products: [
        {
            name: 'Банан',
            picture: 'https://nashzelenyimir.ru/wp-content/uploads/2016/07/Банан-фото.jpg',
            price: 10,
            discount: null,
            inCart: false,
            amount: 0,
            totalPrice: 0
        },
        {
            name: 'Яблоко',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Big_red_apple.jpg',
            price: 8,
            discount: null,
            inCart: false,
            amount: 0,
            totalPrice: 0
        },
        {
            name: 'Папая',
            picture: 'https://xcook.info/wp-content/uploads/sites/default/files/resize/products/2/papajja-2-350x172.jpg',
            price: 10,
            discount: 3,
            inCart: false,
            amount: 0,
            totalPrice: 0
        },
    ],
};

const salesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE-BUCKET-STATE': {
            let newProducts = [...state.products];
            newProducts[action.id].amount = newProducts[action.id].inCart ? 0 : 1;
            newProducts[action.id].totalPrice = newProducts[action.id].inCart ? 0 : newProducts[action.id].price;
            newProducts[action.id].inCart = !newProducts[action.id].inCart;
            return {...state, products: newProducts}
        }
        case 'INC-AMOUNT': {
            let newProducts = [...state.products];
            newProducts[action.id].amount++;
            newProducts[action.id].totalPrice = newProducts[action.id].amount * newProducts[action.id].price;
            if(newProducts[action.id].discount != null){
                let a = Math.trunc(newProducts[action.id].amount / newProducts[action.id].discount) * 5;
                newProducts[action.id].totalPrice -= a;
            }
            return {...state, products: newProducts}
        }
        case 'DEC-AMOUNT': {
            let newProducts = [...state.products];
            newProducts[action.id].amount--;
            if(newProducts[action.id].amount < 0) newProducts[action.id].amount = 0;
            newProducts[action.id].totalPrice = newProducts[action.id].amount * newProducts[action.id].price;
            if(newProducts[action.id].discount != null){
                let a = Math.trunc(newProducts[action.id].amount / newProducts[action.id].discount) * 5;
                newProducts[action.id].totalPrice -= a;
            }
            return {...state, products: newProducts}
        }
        default:
            return state;
    }
}

export const changeBucketState = (id) => {
    return {type: 'CHANGE-BUCKET-STATE', id}
}
export const incAmount = (id) => {
    return {type: 'INC-AMOUNT', id}
}
export const decAmount = (id) => {
    return {type: 'DEC-AMOUNT', id}
}
export default salesReducer;
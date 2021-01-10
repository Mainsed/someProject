let initialState = {
    products: [
        {
            name: 'Банан',
            picture: 'https://nashzelenyimir.ru/wp-content/uploads/2016/07/Банан-фото.jpg',
            price: 10,
            discount: null,
            inCart: false,
        },
        {
            name: 'Яблоко',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Big_red_apple.jpg',
            price: 8,
            discount: null,
            inCart: false,
        },
        {
            name: 'Папая',
            picture: 'https://xcook.info/wp-content/uploads/sites/default/files/resize/products/2/papajja-2-350x172.jpg',
            price: 10,
            discount: 3,
            inCart: false,
        },
    ],
    bucket: [],
};

const discount = (newBucket, products, action) => {
    for (let i = 0; i < newBucket.length; i++) {
        if (newBucket[i].id === action.id) {
            newBucket[i].totalPrice = newBucket[i].amount * products[action.id].price;
            if (products[action.id].discount != null)
                newBucket[i].totalPrice -= Math.trunc(newBucket[i].amount / products[action.id].discount) * 5;
            return newBucket;
        }
    }
}

const salesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE-BUCKET-STATE': {
            let newProducts = [...state.products];
            let newBucket = [...state.bucket];
            if (newProducts[action.id].inCart) {
                newProducts[action.id].inCart = !newProducts[action.id].inCart;
                newBucket = state.bucket.filter(product => product.id !== action.id)
            } else {
                newProducts[action.id].inCart = !newProducts[action.id].inCart;
                newBucket.push({id: action.id, amount: 1, totalPrice: newProducts[action.id].price})
            }
            return {...state, products: newProducts, bucket: newBucket}
        }
        case 'INC-AMOUNT': {
            let newBucket = [...state.bucket];
            newBucket = newBucket.map(product => {
                if(product.id ===action.id) product.amount++;
                return product;
            })

            newBucket = discount(newBucket, state.products, action);
            return {...state, bucket: newBucket}
        }
        case 'DEC-AMOUNT': {
            let newBucket = [...state.bucket];

            newBucket = newBucket.map(product => {
                if(product.id === action.id) product.amount--;
                if(product.amount < 0) product.amount = 0;
                return product;
            })

            newBucket = discount(newBucket, state.products, action);
            return {...state, bucket: newBucket}
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
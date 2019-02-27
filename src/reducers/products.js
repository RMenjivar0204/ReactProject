import types from '../actions/Merch';


const initialState = {
    products: []
}

function productsReducer(state, action){
    if(typeof state === 'undefined') {
        return Object.assign({}, initialState)
    }

    switch (action.type) {
        case: types.PRODUCT_SELECTED:
            return Object.assign({}, state, {
                products: [...state.products, action.product]
            })
        case: types.PRODUCT_DESELECTED:

        default: 
        return state
    }
}


export default productsReducer;
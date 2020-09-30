const { cartConstant } = require("../Constants/CartConstants");

export function cartReducer(state={cartItems:[]}, action) {
    switch(action.type) {
        case cartConstant.ADD_TO_CART:
            const item = action.payload;
            const service = state.cartItems.find(index => index.service === item.service);
            if (service) {
                return { cartItems: state.cartItems.map(index => index.service === service.service ? item : index)}
            } else {
                return { cartItems: [...state.cartItems, item]}
            }
        case cartConstant.REMOVE_FROM_CART:
            return { cartItems: state.cartItems.filter(item => item.service !== action.payload)}
        default:
            return state
    }
}


import axios from 'axios'
import Cookie from 'js-cookie'
import { cartConstant } from '../Constants/CartConstants'

export const addToCart = (serviceId, qty) => async (dispatch, getState) => {
    try {
        const {data} = await axios.get('/gabsip/services/' + serviceId)
        dispatch ({type: cartConstant.ADD_TO_CART, payload: {
            service: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            stock: data.stock,
            qty
        }})
        const {cart: {cartItems}} = getState()
        Cookie.set('cartItems', JSON.stringify(cartItems))
    } catch (err) {}
}

export const removeFromCart = (serviceId) => (dispatch, getState) => {
    dispatch({type: cartConstant.REMOVE_FROM_CART, payload: serviceId})
    const {cart: {cartItems}} = getState()
    Cookie.set('cartItems', JSON.stringify(cartItems))
}
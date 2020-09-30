import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { serviceDetailsReducer, serviceListReducer } from '../Reducer/ServiceReducer'
import { cartReducer } from "../Reducer/CartReducer"
import ReduxThunk from 'redux-thunk'
import Cookie from 'js-cookie'

const cartItems = Cookie.getJSON('cartItems') || []
const initState = {cart: {cartItems}}
const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceDetails: serviceDetailsReducer,
    cart: cartReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initState, composeEnhancer(applyMiddleware(ReduxThunk)))

export default store;
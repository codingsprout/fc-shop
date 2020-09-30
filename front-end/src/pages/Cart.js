import React, { useEffect } from 'react'
import { addToCart, removeFromCart } from '../Actions/CartAction';
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import './Paint/Cart.css'

function Cart(props) {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const serviceId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]):1;
    const dispatch = useDispatch()
    
    useEffect(() => {if(serviceId) {dispatch(addToCart(serviceId, qty))}}, [])
    const removeFromCartHandler = (serviceId) => {dispatch(removeFromCart(serviceId))}

    const checkoutHandler = () => {props.history.push('/login?redirect=shipping')}
    
    return (
        <div className='cart'>
            <div className='cart-list'>
                <ul className='cart-list-area'>
                    <li>
                        <h3>
                            Shopping Cart
                        </h3>
                        <div>
                            Price
                        </div>
                    </li>
                        {cartItems.length === 0 ? 
                            <div>Empty cart</div> : cartItems.map(item =>
                            <li>
                                <div className='cart-image'><img src={item.image} alt='service' /></div> 
                                <div className='cart-name'><div><Link to={'/service/' + item.service}>{item.name}</Link></div>
                                <div>Qty: 
                                    <select value={item.qty} onChange={(event) => dispatch(addToCart(item.service, event.target.value))}> 
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                    </select>
                                    <button className='button' type='button' onClick={() => removeFromCartHandler(item.service)}>
                                        Delete
                                    </button>
                                </div>
                                </div>
                                <div className='cart-price'>{item.price}</div>
                            </li>
                            
                        )}
                </ul>
            </div>
            <div className='cart-action'>
                <h3 className='cart-action-title'>Shopping List Summary</h3>
                <div className='cart-action-subtotal'>
                    <b>Subtotal</b> ( {cartItems.reduce((accumulate, current) => accumulate + current.qty, 0)} items)
                    : $ {cartItems.reduce((accumulate, current) => accumulate + current.price * current.qty, 0)}
                </div>
                <button onClick={checkoutHandler} className='button check-out' disabled={cartItems.length === 0}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    
    )
}

export default Cart

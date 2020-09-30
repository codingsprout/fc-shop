import React, { useEffect, useState } from 'react'
import {Link } from 'react-router-dom'
import "./Paint/Service.css"
import { useDispatch, useSelector } from 'react-redux'
import {detailsService} from '../Actions/ServiceActions'

function Service(props) {
 
    const [member, setMember] = useState('Cawfee Cero')
    const [qty, setQty] = useState(1)
    const serviceDetails = useSelector(state => state.serviceDetails)
    const {service, loading, error} = serviceDetails
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(detailsService(props.match.params.id))
        return () => {
            
        }
    }, [])

    const addToCart = () => {
        props.history.push('/cart/' + props.match.params.id + '?qty=' + qty)
    }

    return (
        <div>
            <div className='back-home'>
                <Link to='/'>Back to home page</Link>
            </div>
            {loading ? <div>Loading...</div> : error ? <div>{error}</div>:
            (<div className='details'>
                <div className='details-image'>
                    <img src={service.image} alt='service'></img>
                </div>
                <div className='details-info'>
                    <ul>
                        <li><h3>{service.name}</h3></li>
                        <li><b>Price:</b> {service.price} gil (per 10)</li>
                        <li><b>Service Description:</b><div>{service.description}</div></li>
                        <li><b>Materials:</b> {service.materials}</li>
                        <li><b>Available Member</b>  
                        <select value={member} onChange={(event) => { setMember(event.target.value) }}>
                        
                        <option>Cawfee Cero</option>
                        <option>Doragun Fisty (limited)</option>
                        <option>Fufu Yin</option>
                        <option>Surq Smug</option>
                        <option>Jeff Bofa</option>

                        </select>
                    </li>
                    </ul>
                </div>
                <div className='details-action'>
                    <ul>
                        <li><b>Price:</b> {service.price}</li>
                        <li><b>Status:</b> {service.stock > 0 ? 'Available' : 'Unavailable'}</li>
                        <li><b>Qty:</b> <select value={qty} onChange={(event) => {setQty(event.target.value)}}>
                            {[...Array(service.stock).keys()].map(stocks => <option key={stocks+1} value={stocks+1}>{stocks+1}</option>)}</select>
                        </li>
                        <li>{service.stock > 0 && <button onClick={addToCart} className='button'>Add to Cart</button>}</li>
                    </ul>
                </div>
            </div>)}
        </div>
    )
}

export default Service
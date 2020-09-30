import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listServices } from '../Actions/ServiceActions'


function Home(props) {

  const serviceList = useSelector(state => state.serviceList);
  const { services, loading, error} = serviceList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listServices())
    return () => {
      //
    }
  }, [])

    return (
      loading ? <div>Loading...</div> : error ? <div>{error}</div> :
        <ul className="services">
        {
          services.map(service => 
            <li key={service._id}>
              <div className="service">
              <Link to={'/service/' + service._id}>
                <img className="service-image" src={service.image} alt="service"/></Link>
                    <div className="service-name">
                      <Link to={'/service/' + service._id}>{service.name}</Link>
                    </div>
                  <div className='service-summary'>{service.summary}</div>
                  <div className="service-price">{service.price} gil</div>
              </div>
          </li>
            )
        }
      </ul>
    )
}

export default Home

import {serviceConstant} from '../Constants/ServiceConstants'

function serviceListReducer(state= {services:[]}, action) {
    switch(action.type) {
        case serviceConstant.SERVICE_LIST_REQUEST:
            return {
                loading: true
            }
        case serviceConstant.SERVICE_LIST_SUCCESS:
            return {
                loading: false,
                services: action.payload
            }
        case serviceConstant.SERVICE_LIST_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;  
    }   
}

function serviceDetailsReducer(state= {service:{} }, action) {
    switch(action.type) {
        case serviceConstant.SERVICE_DETAILS_REQUEST:
            return {
                loading: true
            }
        case serviceConstant.SERVICE_DETAILS_SUCCESS:
            return {
                loading: false,
                service: action.payload
            }
        case serviceConstant.SERVICE_DETAILS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;  
    }   
}

export {serviceListReducer, serviceDetailsReducer}
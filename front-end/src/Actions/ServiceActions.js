import { serviceConstant } from "../Constants/ServiceConstants"
import axios from 'axios'

const listServices = () => async (dispatch) => {
    try {
        dispatch({type:serviceConstant.SERVICE_LIST_REQUEST})
        const {data} = await axios.get('/gabsip/services');
        dispatch({type: serviceConstant.SERVICE_LIST_SUCCESS, payload: data})
    } catch (err) {
        dispatch({type: serviceConstant.SERVICE_LIST_FAILURE, payload: err.message})
    }
}

const detailsService = (serviceId) => async (dispatch) => {
    try {
        dispatch({type: serviceConstant.SERVICE_DETAILS_REQUEST, payload: serviceId})
        const {data} = await axios.get('/gabsip/services/' + serviceId)
        dispatch({type: serviceConstant.SERVICE_DETAILS_SUCCESS, payload: data})
    } catch (err) {
        dispatch({type: serviceConstant.SERVICE_DETAILS_FAILURE, payload: err.message})
    }
}

export {listServices, detailsService}
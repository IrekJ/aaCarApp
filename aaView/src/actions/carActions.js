import {
    GET_CARS,
    DELETE_CAR,
    ADD_CAR,
    GET_CAR,
    UPDATE_CAR,
    SORT_TABLE,
    SORT_ASC,
    DEFAULT_SORT_COLUMN,
    DEFAULT_SORT_ORDER
} from './types';
import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/cars';

export const getCars = () => async dispatch => {
    const res = await axios.get(`${baseUrl}`);
    dispatch({
        type: GET_CARS,
        payload: res.data
    })
    dispatch({
        type: SORT_TABLE,
        payload: { sortColumn: DEFAULT_SORT_COLUMN, sortOrder: DEFAULT_SORT_ORDER },
    }) 
};

export const getCar = (id) => async dispatch => {
    const res = await axios.get(`${baseUrl}/${id}`);
    dispatch({
        type: GET_CAR,
        payload: res.data
    })
};

export const deleteCar = (id) => async dispatch => {
    await axios.delete(`${baseUrl}/${id}`);
    dispatch({
        type: DELETE_CAR,
        payload: id
    });
};

export const updateCar = (car) => async dispatch => {
    const res = await axios.put(`${baseUrl}/${car.carID}`, car);
    dispatch({
        type: UPDATE_CAR,
        payload: res.data
    });
};

export const addCar = (car) => async dispatch => {
    const res = await axios.post(`${baseUrl}`, car);
    dispatch({
        type: ADD_CAR,
        payload: res.data,
    });
};

export const sortTable = (sortColumn, sortOrder) => dispatch => {
    dispatch({
        type: SORT_TABLE,
        payload: { sortColumn: sortColumn, sortOrder: sortOrder },
    })
}
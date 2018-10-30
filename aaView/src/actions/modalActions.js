import {
    HIDE_MODAL,
    SHOW_DETAIL,
    CONFIRM_DELETE,
    EDIT_CAR,
    ENTER_NEW_CAR,
} from './types';

export const hideModal = () => dispatch => {
    dispatch({
        type: HIDE_MODAL,
        payload: true
    });
}

export const confirmDelete = (car) => dispatch => {
    dispatch({
        type: CONFIRM_DELETE,
        payload: car,
    })
}

export const showDetail = (car) => dispatch => {
    dispatch({
        type: SHOW_DETAIL,
        payload: car,
    })
}

export const editCar = (car) => dispatch => {
    dispatch({
        type: EDIT_CAR,
        payload: car,
    })
}

export const enterNewCar = () => dispatch => {
    dispatch({
        type: ENTER_NEW_CAR,
        payload: null
    })
}
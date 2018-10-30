
import {
    SHOW_DETAIL,
    HIDE_MODAL,
    CONFIRM_DELETE,
    EDIT_CAR,
    ENTER_NEW_CAR,
} from '../actions/types';

const initialState = {
    modalProps: {
        modalType: null,
        detailCar: {},
        deleteCar: {},
        editCar: {},
        newCar: {},
        showModal: false,
    },

};


export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_DETAIL:
            return {
                ...state,
                modalProps: {
                    ...state.modalProps,
                    modalType: SHOW_DETAIL,
                    detailCar: action.payload,
                    showModal: true,
                }
            }
        case EDIT_CAR:
            return {
                ...state,
                modalProps: {
                    ...state.modalProps,
                    modalType: EDIT_CAR,
                    editCar: action.payload,
                    showModal: true,
                }
            }
        case CONFIRM_DELETE:
            return {
                ...state,
                modalProps: {
                    ...state.modalProps,
                    modalType: CONFIRM_DELETE,
                    deleteCar: action.payload,
                    showModal: true,
                }
            }
        case ENTER_NEW_CAR:
            return {
                ...state,
                modalProps: {
                    ...state.modalProps,
                    modalType: ENTER_NEW_CAR,
                    newCar: { carID: '0', manufacturer: '', make: '', model: '', year: '' },
                    showModal: true,
                }
            }

        case HIDE_MODAL:
            return initialState;
        default:
            return state;
    }
}  
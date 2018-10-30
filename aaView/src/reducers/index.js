import {combineReducers } from 'redux';
import carReducer from './carReducer';
import modalReducer from './modalReducer';


export default combineReducers({
    car: carReducer,
    modal: modalReducer
});
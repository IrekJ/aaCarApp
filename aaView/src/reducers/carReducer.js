import { GET_CARS, DELETE_CAR, ADD_CAR, GET_CAR, UPDATE_CAR, SORT_ASC, SORT_TABLE, SORT_DESC } from '../actions/types';

const initialState = {
    cars: [],
    sortOrder: SORT_ASC,
    sortColumn: 'manufacturer',
};


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CARS:
            return {

                ...state,
                cars: action.payload
            };
        case GET_CAR:
            return {
                ...state,
                car: action.payload
            }
        case UPDATE_CAR:

            return {
                ...state,
                cars: state.cars.map((car) => car.carID === action.payload.carID ? action.payload : car)
            }

        case DELETE_CAR:
            return {
                ...state,
                cars: state.cars.filter(car =>
                    car.carID !== action.payload)
            };
        case ADD_CAR:
            return {
                ...state,
                cars: [action.payload, ...state.cars]
            };
        case SORT_TABLE:
            const carsClone = state.cars.slice();
            const key = action.payload.sortColumn;
            
            return {
                ...state,
                cars: carsClone.sort((a, b) => {
                    switch (action.payload.sortOrder) {
                        case SORT_DESC:
                            if (a[key] > b[key]) return -1
                            if (a[key] < b[key]) return 1
                            return 0
                        default:
                            if (a[key] > b[key]) return 1
                            if (a[key] < b[key]) return -1
                            return 0
                    }
                }),
                sortColumn: action.payload.sortColumn,
                sortOrder: action.payload.sortOrder,
            }
        default:
            return state;
    }
}
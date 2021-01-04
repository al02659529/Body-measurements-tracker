import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import measurementsReducer from "./reducers/measurements/measurementsReducer";
import measurementsHistoryReducer from "./reducers/measurements/measurementsHistoryReducer";
import measurementInputValueReducer from "./reducers/measurements/measurementInputValueReducer"
import selectedMeasurementReducer from "./reducers/measurements/selectedMeasurementReducer";
import dateReducer from "./reducers/measurements/dateReducer";
import buttonTextReducer from "./reducers/measurements/buttonTextReducer";
import invalidInputReducer from "./reducers/measurements/InvalidInputReducer";
import selectedMeasurementHistoryReducer from "./reducers/measurements/selectedMeasurementHistoryReducer";
import userReducer from "./reducers/user/userReducer";

const combinedStore = combineReducers({
    measurements: measurementsReducer, measurementsHistory: measurementsHistoryReducer,
    selectedMeasurement: selectedMeasurementReducer, selectedMeasurementHistory: selectedMeasurementHistoryReducer, selectedMeasurementInputValue: measurementInputValueReducer,
    selectedDate: dateReducer, buttonText: buttonTextReducer, isInputInvalid: invalidInputReducer,
    user: userReducer
})

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 })

const store = createStore( combinedStore, composeEnhancers())

export default store
const measurementInputValueReducer = (state='', action) => {
    switch (action.type){
        case "SET_SELECTED_MEASUREMENT_INPUT_VALUE" : {
            return action.data
        }
        default: return state
    }
}

export const setMeasurementInputValue = data => {
    return { type: "SET_SELECTED_MEASUREMENT_INPUT_VALUE", data }
}

export default measurementInputValueReducer
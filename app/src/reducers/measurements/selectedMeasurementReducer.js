const selectedMeasurementReducer = (state='', action) => {
    switch (action.type){
        case "SET_SELECTED_MEASUREMENT" : {
            return action.data
        }
        default: return state
    }
}

export const setSelectedMeasurement = data => {
    return { type: "SET_SELECTED_MEASUREMENT", data }
}

export default selectedMeasurementReducer
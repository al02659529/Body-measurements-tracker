const selectedMeasurementHistoryReducer = (state=[], action) => {
    switch (action.type){
        case 'SET_SELECTED_MEASUREMENT_HISTORY': {
            return action.data
        }
        default: return state
    }
}

export const setSelectedMeasurementHistory = data => {
    return { type: 'SET_SELECTED_MEASUREMENT_HISTORY', data }
}

export default selectedMeasurementHistoryReducer
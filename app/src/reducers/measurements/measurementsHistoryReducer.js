const measurementsHistoryReducer = (state=[], action) => {
    switch (action.type){
        case 'SET_MEASUREMENTS_HISTORY': {
            return action.data
        }
        default: return state
    }
}

export const setMeasurementsHistory = data => {
    return { type: 'SET_MEASUREMENTS_HISTORY', data }
}

export default measurementsHistoryReducer
const measurementsReducer = (state=[], action) => {
    switch (action.type){
        case 'SET_MEASUREMENTS': {
            return action.data
        }
        default: return state
    }
}

export const setMeasurements = data => {
    return { type: 'SET_MEASUREMENTS', data }
}

export default measurementsReducer
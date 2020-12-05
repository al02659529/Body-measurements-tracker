const invalidInputReducer = (state=false, action) => {
    switch (action.type){
        case "SET_INVALID_INPUT": {
            return action.data
        }
        default: return state
    }
}

export const setIsInputInvalid = data => {
    return { type: "SET_INVALID_INPUT", data }
}

export default invalidInputReducer
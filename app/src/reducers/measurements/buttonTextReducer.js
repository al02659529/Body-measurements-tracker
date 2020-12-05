const buttonTextReducer = (state='Save', action) => {
    switch (action.type){
        case "SET_BUTTON_TEXT" : {
            return action.data
        }
        default: return state
    }
}

export const setButtonText = data => {
    return { type: "SET_BUTTON_TEXT", data }
}

export default buttonTextReducer
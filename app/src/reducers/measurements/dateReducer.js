const dateReducer = (state='', action) => {
    switch (action.type){
        case "SET_SELECTED_DATE" : {
            return action.data
        }
        default: return state
    }
}

export const setSelectedDate= data => {
    return { type: "SET_SELECTED_DATE", data }
}

export default dateReducer
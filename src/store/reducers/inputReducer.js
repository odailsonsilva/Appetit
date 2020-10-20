const inputValue = 0

export default function(state = inputValue, action){
    switch(action.type){
        case 'SELECTED_INPUT': 
            return{
                ...state,
                inputValue: action.payload
            }
        default:
            return state
    }
}
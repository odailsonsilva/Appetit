const quant = 0

export default function(state = quant, action){
    switch(action.type){
        case 'SELECTED_CLIENT': 
            return{
                ...state,
                quant: action.payload
            }
        case 'NO_SELECTED': 
            return{
                ...state,
                quant: action.payload
            }
        default:
            return state
    }
}
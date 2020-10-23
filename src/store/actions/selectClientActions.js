export function selectedClientAc(newValue){
    return{
        type: 'SELECTED_CLIENT',
        payload: newValue
    }
}

export function noFocus(newValue){
    return{
        type: 'NO_SELECTED',
        payload: newValue
    }
}
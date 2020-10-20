export function selectedClient(newValue){
    return{
        type: 'SELECTED_CLIENT',
        payload: newValue
    }
}
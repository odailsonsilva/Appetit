const initialValues = {
    id: 0,
    name: 'default',
    image: 'url-img'
}

export default function(state = initialValues, action){
    switch(action.type){
        case 'SELECTED_CLIENT': 
            return{
                ...state,
                initialValues: action.payload
            }
        default:
            return state
    }
}
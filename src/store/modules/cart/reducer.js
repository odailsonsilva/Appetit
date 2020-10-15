import produce from 'immer'

export default function cart(state = [], action) {
  switch(action.type){
    case '@car/ADD':
      return produce(state, draft => { //pega o state basico e cria uma copia no draft (rasculho)
        const productIndex = draft.findIndex(p => p.id === action.product.id)
        
        if(productIndex >= 0){ // adicona a quantida
          draft[productIndex].amount += 1; 
        }else{
          //usado para adionar novo produto no carrinho
        draft.push({
          ...action.product,
          amount: 1,
        }) //usa como uma array
        }
        
      })
    case '@car/REMOVE'://vem do buttao de lixo
        return produce(state, draft => {
          const productIndex = draft.findIndex(p => p.id === action.id)
          
          if(productIndex >= 0){
            draft.splice(productIndex, 1)
          }
        })
    case '@car/UPDATE_AMOUNT': {
      if(action.amount <= 0){
        return state
      }

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id)
        
        if(productIndex >= 0){
          draft[productIndex].amount = Number(action.amount)
        }
      })
    }
        
    default: 
      return state
  }
}
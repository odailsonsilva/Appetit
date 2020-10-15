export function addToCart(product) {
  return {
    type: '@car/ADD',
    product
  }
}

export function updateAmount(id, amount){
  return {
    type: '@car/UPDATE_AMOUNT',
    id,
    amount
  }
}
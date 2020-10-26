import React, { createContext, useState, useContext, useEffect} from 'react'
//cria o contexto
export const CartContext = createContext()

//cria o provedor 
export default function CartProvider({children}){//children == tudo que ficar dentro dele
    const [cart, setCart] = useState([])
    const [valueObs, setValueObs] = useState()
    const [totalValue, setTotalValue] = useState()
    const [subTotal, setSubTotal] = useState()
    const [quanti, setQuanti] = useState()

    useEffect(() => {
        let value = 0
        cart.map((item) => {
            value = value + item.subTotal
        })  
        setTotalValue((value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

       
    }, [cart])

    function add(item) {
        const newCart = cart
        item.quanti = quanti
        item.subTotal = subTotal
        item.subTotalFormt = ((subTotal).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
        item.valueObs = valueObs
        item.priceFormat = ((item.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
        localStorage.setItem(`setProducts${item.id}`, JSON.stringify(item));

        newCart.push(item)

        setCart([...newCart])
    }

    function remove(index){
        let newCart = cart.filter((item, i) => i !== index)

        setCart([...newCart])
    }

    const store = { //= cache armazena tudo
        add,
        cart,
        totalValue,
        setQuanti,
        setSubTotal,
        quanti,
        setValueObs,
        valueObs
    }

    return (
        <CartContext.Provider value={store}>
            {children} 
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext)

    const {
        cart,
        add,
        totalValue
    } = context

    return (
        cart,
        add,
        totalValue
    )
}
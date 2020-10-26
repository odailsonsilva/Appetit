import React, {useState, useContext, useEffect} from 'react'

import {Link} from 'react-router-dom'
import {MdAdd, MdRemove} from 'react-icons/md'

import {ContainerBar} from'./style'

import { CartContext} from '../../context/Cart'


function Index(props) {
  const { add, setSubTotal, setQuanti} = useContext(CartContext)

  const cartProduct = localStorage.getItem("cartClient");
  const productParse = JSON.parse(cartProduct);
  const price = productParse.price

  const [quant, setQuant] = useState(1)
  const [value, setValue] = useState(price)
  const [valueFormat, setValueFormat] = useState(
    (price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  )
    
  function handleClickMore(){
    let q = quant + 1

    let som = price * q
    setValue(som)
    setQuant(q)
    setValueFormat((som).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
  }

 function handleClickRemove(){
    if(quant === 1){
      setQuant(1)
    }else{
      setQuant(quant - 1)
      if(quant >= 2){
        let q = quant - 1

        let som = price * q
        setValue(som)
        setQuant(q)
        setValueFormat((som).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
      }
      
    }
  }

  useEffect(()=> {
    setSubTotal(value)
    setQuanti(quant)
  }, [value])

  return (
    <ContainerBar style={{
      display: props.displayB === true ? "none" : "flex"
    }}
    >
      <div className="btns-add-remove">
        <button>
        <MdRemove 
          size={24} 
          color={quant > 1 ? "#ff8822" : "rgba(0, 0, 0, 0.56)"}
          onClick={handleClickRemove} 
        />
        </button>

        <p>{quant}</p>

        <button>
          <MdAdd 
            size={24} 
            color="ff8822"
            onClick={handleClickMore}
          />
        </button>
      </div>
      
      <Link to="/novo-pedido/checkout-product"
        onClick={() => add(productParse)}
      >
        Adicionar
          <span>{valueFormat}</span>
      </Link>
    </ContainerBar>
  )
}


export default Index
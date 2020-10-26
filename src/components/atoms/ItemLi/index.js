import React from 'react'

import {connect} from 'react-redux'

import {Container} from './styles.js'
import './style.css'

function Index({product, select}, props) {
  const setProduct = localStorage.getItem(`setProducts${product.id}`);
  const productParse = JSON.parse(setProduct);

  const handleClickClient = () => {
    if(document.querySelector(".checkbox_class:checked")  ){
      select(product)
    }else if(document.querySelector(".checkbox_class") ){
      select(product)
    }
  }

  const handleTransferData = () => {
    select(product)
    localStorage.setItem("cartClient", JSON.stringify(product))
  }

  return (
    <> 
    <Container
      src={product.image}
      onChange={handleClickClient}
      onClick={handleTransferData}
      key={product.id}
      to={`/detalhes-do-produto/${product.id}`} 
    >
      <input type="checkbox" id={product.id} checked={productParse} className="checkbox_class" value={product.id}/>
      <label htmlFor={product.id}>{product.title}</label>
      <span className="price">{((product.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))}</span>     
    </Container>
    {
          product.x ? ''  :  <div className="divisor_li"></div>
    }
    </>
   
  )
}

function mapStateToProps(state){
  return{
    inputValue: state.inputValue.inputValue
  }
}


export default connect(mapStateToProps)(Index)
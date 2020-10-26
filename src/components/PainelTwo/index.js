import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom'
import './style.css';

import categories from '../../services/categories'

import Header from '../../components/Header'
import ListItem from '../../components/ListItem'
import ItemLi from '../../components/ItemLi'
import {Btn} from '../Btn'
import InputSearch from '../InputSearch'
import CheckoutBar from '../CheckoutBar'
import ProgressBar from '../ProgressBar'


import { CartContext} from '../../context/Cart'

function PainelTwo(props) {
  const {totalValue} = useContext(CartContext)
  const history = useHistory().location.pathname
  
  useEffect(() => {
    if(history === '/novo-pedido'){
      localStorage.clear()
    }
  }, [])

  const [products, setProducts] = useState(categories)
  const [selectedProductsCart, setSelectedProductsCart] = useState()

  const addClient = (product) => {

  }



  
  return (
      <div className="scrollE">
        <div className="responsivo">
        <div className="header_container_painel_two">
          <Header 
            title={props.title} 
            route={props.route} 
            icon={props.showIconBack}/>
        </div>

        <div className="container_info_painel">
          <p>{props.p}</p>

          <p>Passo {props.passo} de 3</p>
          <ProgressBar passo={props.passo}/>
          <h6>{props.h6}</h6>
          <InputSearch />
        </div>

        {
          products.map( category => (
            <ListItem title_Ul={category.titleUl} n_divisor={products.length === category.idUl ? true : false} >
               {
                 category.products.map(product => (
                   <ItemLi 
                    title={product.title}
                    key={product.id}
                    id={product.id}
                    product={product}
                    select={() => addClient(product)}
                    router
                    />
                 ))
               }
            </ListItem>
          ))
        }
      
        <div className="btn_margin">
         <Btn>Avancar</Btn> 
        </div> 

        <CheckoutBar true={1} url="/selecionar-cliente" checkoutTitle={`Total: ${totalValue}`}/>
        </div>
      </div> 
    ); 
}


export default (PainelTwo);
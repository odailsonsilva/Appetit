import React, {useContext} from 'react';
import { CartContext} from '../../context/Cart'

import { 
    Container,
    CheckoutList,
    CheckoutItem,
    TotalContainer
} from './styles';


import Header from '../Header'

import {useHistory} from 'react-router-dom'

function PainelCheckout(props) {
  const history = useHistory().location.pathname
  const clientCart = localStorage.getItem("clients");
  const clientsParse = JSON.parse(clientCart);
  
  const { cart, totalValue } = useContext(CartContext)

  return (
      <Container className="abstract_painel">
          <div className="header_container_painel_two header-chckout">

            <Header 
              title="Novo pedido" 
              showIconBack 
              route={props.route}
              icon={props.showIconBack}
            />
          </div>

          <CheckoutList>
              <h4>Produtos</h4>
              {cart.map((item) => (
                <>
                  <CheckoutItem divisorTrue>
                    <div>
                      <img src={item.image} />
                      <p className="checkoutP">{item.quanti}x {item.title}</p>
                    </div>
                    <span>{item.subTotalFormt}</span>
                  </CheckoutItem>

                  <p className="descrition">{item.valueObs}</p>
                </>
              ))}
              <CheckoutItem divisorTrue>
                  
              </CheckoutItem>
             
          </CheckoutList>

            <div className="divisor"></div>

          {
            history === '/selecionar-cliente' ? 
              ""
            :
            <>
                  <CheckoutList>
                    <h4>Clientes</h4>
                    {
                      clientsParse.map( client =>
                        <CheckoutItem divisorTrue>
                          <div>
                            <img src={client.image} />
                            <p>{client.name}</p>
                          </div>
                      </CheckoutItem>
                        )
                    }
                    
                </CheckoutList>

            <div className="divisor"></div>
            </>
          }
          <TotalContainer>
              <p>Total</p>
              <p className="value">{totalValue}</p>
          </TotalContainer>
      </Container>
  );
}

export default PainelCheckout;
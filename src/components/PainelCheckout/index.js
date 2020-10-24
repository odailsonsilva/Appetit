import React from 'react';

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
              <CheckoutItem divisorTrue>
                  <div>
                    <img src="https://abrilmdemulher.files.wordpress.com/2019/01/cuscuz-paulista-moderno.jpg?quality=90&strip=info&w=680&h=453&crop=1" />
                    <p className="checkoutP">2x Cuscuz completo</p>
                  </div>
                  <span>R$ 3,25</span>
              </CheckoutItem>
              <p>Não adicionar manteiga</p>
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
              <p className="value">R$ 6,50</p>
          </TotalContainer>
      </Container>
  );
}

export default PainelCheckout;
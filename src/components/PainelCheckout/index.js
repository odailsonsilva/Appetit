import React, {useState} from 'react';

import { 
    Container,
    CheckoutList,
    CheckoutItem,
    TotalContainer
} from './styles';

import Client1 from '../../assets/imgs/profile/client-1.svg'
import Client2 from '../../assets/imgs/profile/client-2.svg'
import Client3 from '../../assets/imgs/profile/client-3.svg'

import Header from '../Header'

function PainelCheckout(props) {
  const [divisor, setDivisor] = useState(true)

  return (
      <Container className="abstract_painel">
          <div className="header_container_painel_two">
          <Header 
            title="Novo pedido" 
            showIconBack 
            route="/lista-de-pedidos" 
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

          <CheckoutList>
              <h4>Clientes</h4>
              <CheckoutItem divisorTrue>
                  <div>
                    <img src={Client1} />
                    <p>Justine Marshall</p>
                  </div>
              </CheckoutItem>

              <CheckoutItem divisorTrue>
                  <div>
                    <img src={Client2} />
                    <p>Bairam Frootan</p>
                  </div>
              </CheckoutItem>

              <CheckoutItem divisorTrue>
                  <div>
                    <img src={Client3} />
                    <p>Tua Manuera</p>
                  </div>
              </CheckoutItem>
          </CheckoutList>

          <div className="divisor"></div>
          
          <TotalContainer>
              <p>Total</p>
              <p className="value">R$ 6,50</p>
          </TotalContainer>
      </Container>
  );
}

export default PainelCheckout;
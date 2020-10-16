import React from 'react';

import { Container } from './styles';

import HeaderImg from '../../components/HeaderImg'
import PainelD from '../../components/PainelD'
import PainelClient from '../../components/PainelClient'
import SideBar from '../../components/SideBar/SideBar'


function Payment() {
  return (
    <Container>
        <div>
        <SideBar />
        </div>

        <div class="abstract_painel">
         <PainelD showIconBack/>
        </div>
        
        <div>
          <HeaderImg />
          
        </div>
        
        
      </Container>
  );
}

export default Payment;
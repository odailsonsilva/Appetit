import React from 'react';

import ImgMain from '../../assets/imgs/Illustration.svg'

import { 
    Container, 
    Grid1, 
    Grid2, 
    ContainerImg,
    ContainerBtns,
    BtnOrder,
    BtnNew
} from './styles';

import SideBar from '../../components/SideBar/SideBar'
import HeaderImg from '../../components/HeaderImg'

function FeedbackOrder() {
  return (
        <Container>
            <Grid1>
                <SideBar />
            </Grid1>

            <Grid2>
                <HeaderImg class="header-fixed"/>
                <ContainerImg>
                    <img src={ImgMain} className="img-main" />
                    <p>Pedido feito com sucesso!</p>
                </ContainerImg>

                <ContainerBtns>
                    <BtnOrder to="/lista-de-pedidos" className="btn-order">voltar para lista de pedidos</BtnOrder>
                    <BtnNew to="/novo-pedido" className="btn-new">FAZER NOVO PEDIDO</BtnNew>
                </ContainerBtns>
            </Grid2>
        </Container>
    );
}

export default FeedbackOrder;
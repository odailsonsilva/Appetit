import React, {useState, useEffect} from 'react';
import './style.css';

import ImgTest from '../../assets/imgs/profile/profile.svg'
import CheckboxImg from '../../assets/imgs/client-selected/checkbox.svg'

import Header from '../../components/Header'
import ListItem from '../../components/ListItem'
import ItemLi from '../../components/ItemLi'
import {Btn} from '../Btn'
import InputSearch from '../InputSearch'
import CheckoutBar from '../CheckoutBar'
import ProgressBar from '../ProgressBar'

import { useHistory } from 'react-router-dom';

function PainelTwo(props) {

  
  const history = useHistory().location.pathname
  const r = history == "/novo-pedido/checkout-product" ? 1 : 0
  let imgSelect = r != 1 ? "https://s2.glbimg.com/0BsLY23sXDUg6wyeawk3Ur39CW0=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/H/m/TB0qseRj2xqTSntdQRPQ/cuscuz.jpg" : CheckboxImg

  console.log( r)
  return (
      <div className="scrollE">
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
          
        <ListItem title_Ul="Cuscuz" divisor>
          <ItemLi title="Cuscuz simples" url="https://s2.glbimg.com/0BsLY23sXDUg6wyeawk3Ur39CW0=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/H/m/TB0qseRj2xqTSntdQRPQ/cuscuz.jpg" 
          router/>
          <ItemLi 
          title="Cuscuz completo" 
          url={imgSelect}
           router no_divisor
           />
        </ListItem>
            
        <ListItem title_Ul="Pães" divisor>
          <ItemLi url="https://img.itdg.com.br/tdg/images/recipes/000/178/357/328308/328308_original.jpg?w=1200"
           title="Pão caseiro" router/>
          <ItemLi url="https://catracalivre.com.br/wp-content/uploads/2020/06/pao-caseiro-mama-creditos.jpg"
           title="Pão caseiro completo" router/>
          <ItemLi url="https://2.bp.blogspot.com/-n0BRuB8rVnM/Wwv2pb63PcI/AAAAAAAAM_E/gYTFlGH39zg95nDYtdwPteKhFc8vocccgCLcBGAs/s1600/misto-quente-receita-1.jpeg"title="misto quente" router/>
          <ItemLi url="https://i.pinimg.com/736x/1a/7b/d4/1a7bd470a8bc5ae2ba86eed85f5372f8.jpg" title="Lingua de sogra (pequena)" router/>
          <ItemLi url="https://i.ytimg.com/vi/oiKdg1llkQ4/maxresdefault.jpg"
           title="Lingua de sogra (grande)" router no_divisor/>
        </ListItem>
 
        <ListItem title_Ul="Salgados" divisor>
          <ItemLi url="https://img.itdg.com.br/tdg/images/recipes/000/141/542/122031/122031_original.jpg?mode=crop&width=710&height=400"
           title="Pastelzinho de carne" router/>
          <ItemLi url="https://www.receitas-sem-fronteiras.com/uploads/media/esfiha-de-frango.jpg?1393354488"
           title="Esfirra de frango" router/>
          <ItemLi url="https://s2.glbimg.com/Z-ccjdjPPGu8QbVb9xkly96qxAk=/0x0:640x480/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/10/08/15_41_27_435_DSC08561.JPG"
           title="Enrolado de presunto" router no_divisor/>
        </ListItem>

        <ListItem title_Ul="Bebidas">
          <ItemLi url="https://static1.conquistesuavida.com.br/articles//5/10/83/5/@/29327-sucos-funcionais-extraem-o-melhor-das-fr-article_block_media-2.jpg"
          title="Sucos" router/>
          <ItemLi url="https://i0.wp.com/fontedasaude.org/wp-content/uploads/2017/07/VITAMINA-PARA-EMAGRECER.jpg?fit=600%2C330&ssl=1" 
          title="Vitaminas" router/>
          <ItemLi url="https://www.sushimanscwb.com.br/wp-content/uploads/2018/10/1579_REFRIGERANTE_LATA_-_350ml_17d2e336feb44a2696fd6cf852c41b50-1.jpeg"
           title="Refrigerantes" router/>
          <ItemLi url="https://cdn.garciasupermercados.com.br/media/catalog/product/cache/1/image/1000x1000/17f82f742ffe127f42dca9de82fb58b1/_/g/_gua_mineral_sem_g_s_crystal_500ml.jpg"
          title="Água mineral (sem gás)" router/>
          <ItemLi url="https://casafiesta.fbitsstatic.net/img/p/agua-mineral-natural-crystal-com-gas-500ml-63463/230321.jpg?w=420&h=420&v=202009170943"
          title="Água mineral (com gás)" router/>
          <ItemLi url="https://assets.instabuy.com.br/ib.item.image.big/b-93dff939ea034b21a77a7a32cf75dc09.jpeg"
           title="Nescau" router no_divisor/>
        </ListItem>
  
      
        <div className="btn_margin">
         <Btn>Avancar</Btn> 
        </div> 

        <CheckoutBar true={1} url="/selecionar-cliente" checkoutTitle="Total: R$ 3,25"/>
      </div> 
    ); 
}

export default PainelTwo;
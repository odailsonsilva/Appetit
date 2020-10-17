import React from 'react';
import './style.css';

import Header from '../../components/Header'
import BoxInput from '../../components/BoxRadio'
import {Btn} from '../Btn'
import ProfileImg from '../../assets/imgs/profile/profile.svg'
import CartBarOne from '../CartBarOne'

class PainelTwo extends React.Component {

  state = {
    activeNextPage: false
  }

  selectRadio = e => {
    this.setState({
      activeNextPage: true
    })
  }

  render(){
    return (
      <div className="scrollE">
        <div className="header_container_painel_two">
          <Header 
            title={this.props.title} 
            route={this.props.route} 
            icon={this.props.showIconBack}/>
        </div>
      

        <div className="container_info_painel">
          <p>{this.props.p}</p>

          <div className="product_detail_order">
            <img src="https://abrilmdemulher.files.wordpress.com/2019/01/cuscuz-paulista-moderno.jpg?quality=90&strip=info&w=680&h=453&crop=1" alt=""/>
            <div>
              <h6>Cuscuz completo</h6>
              <p>R$ 3,25</p>
            </div>
          </div>

          <div className="product_type" >
            <BoxInput radio_name_one="Milho" radio_name_two="Arroz"></BoxInput>
          </div>
          
        </div>

        <div className="divisor_lists"></div>

        <div className="comments_area">
          <p>Observações</p>
          <input type="text" placeholder="Observações"/>
        </div>  
        
        <CartBarOne/>
      </div> 
    ); 
  }
}


export default PainelTwo
import React from 'react';
import {Link} from 'react-router-dom'

import LogoFE from '../../assets/imgs/logo-fe.svg'

import IconOrders from '../../assets/imgs/icon-orders.svg'
import IconOrdersB from '../../assets/imgs/icon-orders-b.svg'

import IconClientsB from '../../assets/imgs/icon-clients.svg'
import IconClients from '../../assets/imgs/icon-clients-e.svg'

import {Icon} from './StyleComponent'
import './style.css'

class SideBar extends React.Component{

  state = {
    show: 'none',
    activeAttr: false,
    activeLink: false,
    iconOrder: IconOrdersB,
    iconClient: IconClientsB
  }

  menuShow = e => {
    if(this.state.show == 'none'){
      this.setState({
        show: 'show',
        activeAttr: true,
        iconOrder: IconOrders,
        iconClient: IconClients
      })
    }else{
      this.setState({
        show: 'none',
        activeAttr: false,
        iconOrder: IconOrdersB,
        iconClient: IconClientsB
      })
    }
  }

  funActiveLink = e => {
    if(this.state.activeLink == false){
      this.setState({
        activeLink: true
      })
    }else{
      this.setState({
        activeLink: false
      })
    }
  }

  render(){
    return(
      <nav id="sidebar">
        <img src={LogoFE} alt="" className="logo"/>

        <ul className="menu">
            <li className="animationSideBar" >
              <Link 
                className={this.state.activeAttr ? 'link-sidebar active' : 'link-sidebar'} 
                onClick={this.menuShow}
              >
                <Icon icon={this.state.iconC} 
                  activeAttr={this.state.activeAttr} 
                  icon={this.state.iconOrder}
                >
                  PEDIDOS
                </Icon>
              </Link>

              <ul className={this.state.show}>
                <li><Link to="/lista-de-pedidos" 
                 className={this.state.activeLink ? 'active' : ''} 
                 onClick={this.funActiveLink}
                >
                  EM ABERTOS
                </Link></li>
                <li><Link >ENCERRADOS</Link></li>
              </ul>
            
            </li>
  
            <li>
            <Link className={this.state.activeAttr ? 'link-sidebar active' : 'link-sidebar'}
              // onClick={this.menuShow}
            >
              <Icon
                activeAttr={this.state.activeAttr} 
                icon={this.state.iconClient}
              >
               Clientes
              </Icon>
            </Link>
            </li>
        </ul>

        <p>Infoway Gestão em Saúde ©, 2020.</p>
  
      </nav>
      
    )
  }
}

export default SideBar
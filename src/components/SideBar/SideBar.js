import React from "react";
import { Link } from "react-router-dom";

import LogoFE from "../../assets/imgs/logo-fe.svg";

import IconOrders from "../../assets/imgs/icon-orders.svg";
import IconOrdersB from "../../assets/imgs/icon-orders-b.svg";

import IconClientsB from "../../assets/imgs/icon-clients.svg";

import { Icon } from "./StyleComponent";
import "./style.css";

class SideBar extends React.Component {
  state = {
    show: "show",
    activeAttr: true,
    activeAttr2: false,
    activeLink: false,
    activeLink2: false,
    iconOrder: IconOrders,
    iconClient: IconClientsB,
    inicializeBG: "#fff"
  };

  menuShow = (e) => {
    if (this.state.show === "show") {
      this.setState({
        show: "none",
        activeAttr: false,
        iconOrder: IconOrdersB
        // iconClient: IconClients,
      });
    } else {
      this.setState({
        show: "show",
        activeAttr: true,
        iconOrder: IconOrders,
        iconClient: IconClientsB,
      });
    }
  };

  funActiveLink = (e) => {
    if (this.state.activeLink === false) {
      this.setState({
        activeLink: true,
        activeLink2: false,
      });
    }
  };

  funActiveLink2 = (e) => {
    if (this.state.activeLink2 === false) {
      this.setState({
        activeLink: false,
        activeLink2: true,
      });
    }
  };

  render() {
    return (
      <aside id="sidebar">
        <img src={LogoFE} alt="" className="logo" />

        <ul className="menu">
          <li className="animationSideBar">
            <Link
              className={
                this.state.activeAttr ? "link-sidebar" : "link-sidebar active"
              }
              onClick={this.menuShow}
            >
              <Icon
                icon={this.state.iconC}
                activeAttr={this.state.activeAttr}
                icon={this.state.iconOrder}
                style={{backgroudColor: "#fff"}}
              >
                PEDIDOS
              </Icon>
            </Link>

            <ul className={this.state.show}>
              <li>
                <Link
                  to="/lista-de-pedidos"
                  className={this.state.activeLink ? "" : "active a"}
                >
                  EM ABERTOS
                </Link>
              </li>
              <li>
                <Link
                  to="/lista-de-pedidos"
                  className={this.state.activeLink2 ? "active b" : ""}                
                >
                  ENCERRADOS
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              className={
                this.state.activeAttr2 ? "link-sidebar-2 active" : "link-sidebar-2"
              }
            // onClick={this.menuShow}
            >
              <Icon
                activeAttr={this.state.activeAttr2}
                icon={this.state.iconClient}
              >
                Clientes
              </Icon>
            </Link>
          </li>
        </ul>

        <p>Infoway Gestão em Saúde ©, 2020.</p>
      </aside>
    );
  }
}

export default SideBar;

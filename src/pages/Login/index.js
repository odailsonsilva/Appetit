import React from 'react'

import './style.css'

import Input from '../../components/atoms/Input/Input'
import Logo from '../../assets/imgs/logo-fc.svg'

class Index extends React.Component {

  state = {
    email:"",
    password: ""
  }

  recoverValeuEmail = (value) => {
    this.setState({
      email: value
    })
  }

  recoverValeuPassword = (value) => {
    this.setState({
      password: value
    })
  }
  

  render(){

    return (
      <div id="container-login">
  
        <img src={Logo} alt="Appetit"/>
  
        <main>
            <h3>Seja bem-vindo!</h3>
            <p>Nós sabemos a importância de estar sempre de barriga cheia e o quanto isso pode ajudar no seu dia.</p>
        </main>
  
        <form action="/lista-de-pedidos" className="form-area">
          <Input 
            type="text" 
            name="Email" 
            value={this.state.email} 
            quandoAlterar={this.recoverValeuEmail}
          />
          <Input 
            type="password" 
            name="Senha" 
            value={this.state.password} 
            quandoAlterar={this.recoverValeuPassword}
          />
          <a href="#" className="recover-pass">Recuperar minha senha</a>
          <button 
            className="btn-entry" 
            disabled={!this.state.password || !this.state.email }>
              Entrar
          </button>
        </form>
  
        <footer>
          <p>Infoway Gestão em Saúde ©, 2020.</p>
        </footer>
        
      </div>
  )
  }
}

export default Index;
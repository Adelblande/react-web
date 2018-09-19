import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as LoginActions from './../actions/LoginActions';

class FormLogin extends Component {
  _autenticaUsuario() {
    const { email, senha } = this.props;
    this.props.autenticaUsuario({email, senha})
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-two-fifths">
              <div className="field">
                <div className="control">
                  <h1 className="title">Login</h1>
                  <div>{this.props.msgCadastro}</div>
                </div>  
              </div>
            </div>    
          </div>
          <div className="columns is-centered">
            <div className="column is-two-fifths">
              <form>
                <div className="field">
                  <div className="control">
                    <input className="input is-info" type="text" value={this.props.email} onChange={(e) => this.props.modificaEmail(e.target.value)} placeholder="E-mail" />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input is-info" type="password" value={this.props.senha} onChange={(e) => this.props.modificaSenha(e.target.value)} placeholder="Senha" />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    Ainda não tem cadastro? <Link to="/cadastro">Cadastre-se</Link>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                  <button type="button" className="button is-info is-outlined" onClick={() => this._autenticaUsuario()}>Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
}

const mapStateToProps = state => ({
  email: state.LoginReducer.email,
  senha: state.LoginReducer.senha,
  msgCadastro: state.LoginReducer.msgCadastro
})

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);

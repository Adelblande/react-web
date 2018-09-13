import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as LoginActions from './../actions/LoginActions';

class FormCadastro extends Component {
  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-two-fifths">
          <form>
            <div className="field">
              <div className="control">
                <input className="input is-info" type="text" value={this.props.nome} onChange={(e) => this.props.modificaNome(e.target.value)} placeholder="Nome" />
              </div>
            </div>
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
              <button type="button" className="button is-info is-outlined" onClick={() => {}}>Cadastrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  nome: state.LoginReducer.nome,
  email: state.LoginReducer.email,
  senha: state.LoginReducer.senha
})

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormCadastro);

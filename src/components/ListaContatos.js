import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as contatosActions from './../actions/contatosAction';

class ListaContatos extends Component {
  constructor(props){
    super(props)
    this._excluirContato = this._excluirContato.bind(this);
  }

  _excluirContato(contato) {
    this.props.excluirContato(contato);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.contatos);
  }

  render() {
    return (
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.contatos.map(contato => (
              <tr key={contato.id}>
                <td>{contato.nome}</td>
                <td>{contato.email}</td>
                <td>{contato.telefone}</td>
                <td>
                  <button className="button is-success is-outlined is-small" onClick={() => {}}>Alterar</button>
                  <button className="button is-danger is-outlined is-small" onClick={() => this._excluirContato(contato)}>Excluir</button>
                </td>
              </tr>  
            ))
          }
        </tbody>
      </table>
  
    )
  }
}

const mapStateToProps = state => ({
  contatos: state.contatos
})
const mapDispatchToProps = dispatch => bindActionCreators(contatosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListaContatos);
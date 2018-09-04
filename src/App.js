import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'firebase/app';
import 'firebase/database';

import * as contatosActions from './actions/contatosAction';

import FormContato from './components/FormContato';
import TotalContatos from './components/TotalContatos';

class App extends Component {
  componentWillMount() {
    var config = {
      
    };
    firebase.initializeApp(config);
    this.mostraContatos();
  }

  mostraContatos() {
    this.props.carregaContatos();
  }

  render() {
    return (
      <div className="container">
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Contatos
              </h1>
            </div>
          </div>
        </section>
        <FormContato />
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
                    <button className="button is-danger is-outlined is-small" onClick={() => {}}>Excluir</button>
                  </td>
                </tr>  
              ))
            }
          </tbody>
        </table>
        
        <TotalContatos />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contatos: state.contatos
})
const mapDispatchToProps = dispatch => bindActionCreators(contatosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

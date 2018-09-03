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
      apiKey: "AIzaSyBko3o3XPN9sDa0cx11Uhy9IolQnCPNUzM",
      authDomain: "react-f88be.firebaseapp.com",
      databaseURL: "https://react-f88be.firebaseio.com",
      projectId: "react-f88be",
      storageBucket: "react-f88be.appspot.com",
      messagingSenderId: "213271732398"
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
        <section class="hero is-dark">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Contatos
              </h1>
            </div>
          </div>
        </section>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.contatos.map(contato => (
                <tr key={contato.email}>
                  <td>{contato.nome}</td>
                  <td>{contato.email}</td>
                  <td>{contato.telefone}</td>
                  <td>
                    <button className="button is-success is-outlined" onClick={() => {}}>Alterar</button>
                    <button className="button is-danger is-outlined" onClick={() => {}}>Alterar</button>
                  </td>
                </tr>  
              ))
            }
          </tbody>
        </table>
        
        <FormContato />
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'firebase/app';
import 'firebase/database';

import * as contatosActions from './actions/contatosAction';

import FormContato from './components/FormContato';
import TotalContatos from './components/TotalContatos';
import logo from './logo.svg';
import './App.css';


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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
        {
          this.props.contatos.map(contato => (
            <li key={contato.email}>{contato.nome} | {contato.email} | {contato.telefone} </li>
          ))
        }
        </ul>
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

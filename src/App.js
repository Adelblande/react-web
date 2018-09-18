import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'firebase/app';
import 'firebase/database';


import * as contatosActions from './actions/contatosAction';

// import FormContato from './components/FormContato';
// import TotalContatos from './components/TotalContatos';
// import ListaContatos from './components/ListaContatos';
// import Cabecalho from './components/Cabecalho';
import Routes from './routes';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBK7-FLFSQjG7S6R8Ca_5HmTsQjITD2hbA",
      authDomain: "opapotabom-c242e.firebaseapp.com",
      databaseURL: "https://opapotabom-c242e.firebaseio.com",
      projectId: "opapotabom-c242e",
      storageBucket: "opapotabom-c242e.appspot.com",
      messagingSenderId: "933024173556"
    };
    firebase.initializeApp(config);
    this._carregaContatos();
  }
  
  _carregaContatos() {
    this.props.carregaContatos();
  }
  
  render() {
    return (
      <Routes />
    );
  }
}

const mapStateToProps = state => ({
  contatos: state.contatos
})
const mapDispatchToProps = dispatch => bindActionCreators(contatosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

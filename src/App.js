import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'firebase/app';
import 'firebase/database';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as contatosActions from './actions/contatosAction';

// import FormContato from './components/FormContato';
// import TotalContatos from './components/TotalContatos';
// import ListaContatos from './components/ListaContatos';
// import Cabecalho from './components/Cabecalho';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

class App extends Component {
  componentWillMount() {
    var config = {
      
    };
    firebase.initializeApp(config);
    this._carregaContatos();
  }
  
  _carregaContatos() {
    this.props.carregaContatos();
  }
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={FormLogin} />
          <Route path="/cadastro" component={FormCadastro} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  contatos: state.contatos
})
const mapDispatchToProps = dispatch => bindActionCreators(contatosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

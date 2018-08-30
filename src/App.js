import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as contatosActions from './actions/contatosAction';

import FormContato from './components/FormContato';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {
          this.props.contatos.map(contato => (
            <li key={contato.id}>{contato.nome}</li>
          ))
        }

        <FormContato />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contatos: state.contatos
})
const mapDispatchToProps = dispatch => bindActionCreators(contatosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

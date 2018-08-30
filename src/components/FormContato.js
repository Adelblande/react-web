import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as contatosActions from './../actions/contatosAction';

class FormContato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      telefone: ''
    }
  }

  addNovoContato() {
    this.props.addContato(this.state);
    this.setState({
      nome: '',
      email: '',
      telefone: ''
    })
  }

  render(){
    return (
      <div>
        <br /><br />
        <form>
          <input type="text" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})} placeholder="Nome"/>
          <input type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} placeholder="E-mail"/>
          <input type="text" value={this.state.telefone} onChange={(e) => this.setState({telefone: e.target.value})} placeholder="Telefone"/>
        </form>
        <br />
        <button onClick={this.addNovoContato}>Add Contato</button>  
        <br /><br />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(contatosActions, dispatch);


export default connect(null, mapDispatchToProps)(FormContato)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as contatosActions from './../actions/contatosAction';

class FormContato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contato :{
        id: '00025',
        nome: 'Euvezio',
        email: 'euvezio@hotmail.com',
        telefone: '1123232323'
      }

    }
    this.addNovoContato = this.addNovoContato.bind(this)
  }

  addNovoContato() {
    this.props.addContatos(this.state.contato);
    this.setState({
      id: '',
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
          <input type="text" value={this.state.contato.nome} onChange={(e) => this.setState({nome: e.target.value})} placeholder="Nome"/>
          <input type="text" value={this.state.contato.email} onChange={(e) => this.setState({email: e.target.value})} placeholder="E-mail"/>
          <input type="text" value={this.state.contato.telefone} onChange={(e) => this.setState({telefone: e.target.value})} placeholder="Telefone"/>
        </form>
        <br />
        <button onClick={this.addNovoContato}>Add Contato</button>  
        <br /><br />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contatos: state.contatos
})
const mapDispatchToProps = dispatch => bindActionCreators(contatosActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(FormContato)
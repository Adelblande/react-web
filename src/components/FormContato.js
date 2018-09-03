import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as contatosActions from './../actions/contatosAction';

class FormContato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      nome: '',
      email: '',
      telefone: ''
    }
    this.addNovoContato = this.addNovoContato.bind(this)
  }

  addNovoContato() {
    this.props.addContatos(this.state);
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
        <div className="field">
          <div className="control">
            <input className="input is-info" type="text" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})} placeholder="Nome" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input is-info" type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} placeholder="E-mail" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input is-info" type="text" value={this.state.telefone} onChange={(e) => this.setState({telefone: e.target.value})} placeholder="Telefone" />
          </div>
        </div>
        <br />
        <button className="button is-info is-outlined" onClick={this.addNovoContato}>Add Contato</button>  
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
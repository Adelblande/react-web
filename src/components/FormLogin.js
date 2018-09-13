import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as LoginActions from './../actions/LoginActions';

const FormLogin = props => {
  console.log(props);
  return (
    <div className="columns is-centered">
      <div className="column is-two-fifths">
        <form>
          <div className="field">
            <div className="control">
              <input className="input is-info" type="text" value={props.email} onChange={(e) => props.modificaEmail(e.target.value)} placeholder="E-mail" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-info" type="password" value={props.senha} onChange={(e) => props.modificaSenha(e.target.value)} placeholder="Senha" />
            </div>
          </div>
          <div className="field">
            <div className="control">
            <button type="button" className="button is-info is-outlined" onClick={() => {}}>Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )

}

const mapStateToProps = state => ({
  email: state.LoginReducer.email,
  senha: state.LoginReducer.senha
})

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);

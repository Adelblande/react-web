import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { push } from 'connected-react-router';


export const modificaNome = (novoNome) => {
  return {
    type: 'MODIFICA_NOME',
    payload: novoNome
  }
}
export const modificaEmail = (novoEmail) => {
  return {
    type: 'MODIFICA_EMAIL',
    payload: novoEmail
  }
}
export const modificaSenha = (novaSenha) => {
  return {
    type: 'MODIFICA_SENHA',
    payload: novaSenha
  }
}
export const cadastraUsuario = ({nome, email, senha}) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then((user) => {
        let emailBase64 = btoa(email);
        firebase.database().ref(`/contatos/${emailBase64}`).push({nome});

        cadastraUsuarioSucesso(dispatch)
      })
      .catch((erro) => cadastraUsuarioErro(erro, dispatch));
  }
}
const cadastraUsuarioSucesso = (dispatch) => {
  dispatch({type: 'CADASTRA_USUARIO_SUCESSO', payload: 'Cadastro efetuado com sucesso.'})
  dispatch(push('/'))
}
const cadastraUsuarioErro = (erro, dispatch) => {
  dispatch({type: 'CADASTRA_USUARIO_ERRO', payload: erro.message})
}
export const autenticaUsuario = ({email, senha}) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then((login) => autenticaUsuarioSucesso(dispatch))
      .catch((erro) => autenticaUsuarioErro(erro, dispatch));
  } 
}
const autenticaUsuarioSucesso = dispatch => {
  dispatch({type: 'AUTENTICA_USUARIO_SUCESSO'})
  dispatch(push('/principal'))
}
const autenticaUsuarioErro = (erro, dispatch) => {
  dispatch({type: 'AUTENTICA_USUARIO_ERRO', payload: erro.message})
}

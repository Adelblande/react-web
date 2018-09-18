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
      .then((user) => cadastraUsuarioSucesso(dispatch))
      .catch((erro) => cadastraUsuarioErro(erro, dispatch));
  }
}

export const fazLogin = ({email, senha}) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then((login) => console.log(login))
      .catch((erro) => console.log(erro));
  } 
}

const cadastraUsuarioSucesso = (dispatch) => {
  dispatch({type: 'CADASTRA_USUARIO_SUCESSO', payload: 'Cadastro efetuado com sucesso.'})
  dispatch(push('/'))
}

const cadastraUsuarioErro = (erro, dispatch) => {
  dispatch({type: 'CADASTRA_USUARIO_ERRO', payload: erro.message})
}

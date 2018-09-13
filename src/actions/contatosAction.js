import firebase from 'firebase/app';
import 'firebase/database';

export function addContatos(contato) {
  return dispatch => {
    firebase.database().ref('contatos').push(contato);
    dispatch({
      type: 'ADD_CONTATO',
      contato
    })
  }
}

export function carregaContatos() {
  return dispatch => {
    firebase.database().ref('contatos').on('value', snap => {
      const arrayContatos = [];
      snap.forEach((item) => {
        arrayContatos.push({id: item.key, ...item.val()});
      })
      dispatch({
        type: 'CARREGA_CONTATOS',
        contatos: arrayContatos
      })
    })
  }
}

export function excluirContato(contato) {
  return dispatch => {
    firebase.database().ref('contatos').child(contato.id).remove();
    dispatch({
      type: 'EXCLUIR_CONTATO',
      contato
    })
  }
}

export function alterarContato(contato) {
  return dispatch => {
    firebase.database().ref('contatos').child(contato.id).set(contato);
    dispatch({
      type: 'ALTERAR_CONTATO',
      contato
    })
  }
}
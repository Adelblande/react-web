import firebase from 'firebase/app';
import 'firebase/database';

export function addContatos(contato) {
  return {
    type: 'ADD_CONTATO',
    contato
  }
}

export function carregaContatos() {
  return dispatch => {
    firebase.database().ref('contatos').on('value', snap => {
      snap.forEach((item) => {
        dispatch({
          type: 'CARREGA_CONTATOS',
          contatos: item.val()
        })
      })
    })
  }
}
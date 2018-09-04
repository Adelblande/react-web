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
    const arrayContatos = [];
    firebase.database().ref('contatos').on('value', snap => {
      snap.forEach((item) => {
        arrayContatos.push({id: item.key, nome: item.val().nome, email: item.val().email, telefone: item.val().telefone})
      })
      dispatch({
        type: 'CARREGA_CONTATOS',
        contatos: arrayContatos
      })
    })
  }
}
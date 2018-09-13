import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

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
      .then((user) => console.log(user))
      .catch((erro) => console.log(erro));
  }
}

// export const fazLogin = (user) => {
//   return dispatch => {
//     firebase.auth().signInWithEmailAndPassword(user.email, user.senha).then((login) => {
//       dispatch({
//         type: 'LOGAR',
//         user: login.user.uid
//       })
      
//     })
//   } 
// }
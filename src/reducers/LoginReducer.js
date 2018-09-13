const INITIAL_STATE = {nome: 'Adelblande', email: 'adelblande@hotmail.com', senha: '2323'}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'MODIFICA_EMAIL':
      return {...state, email: action.payload}
    
    case 'MODIFICA_NOME':
      return {...state, nome: action.payload}
    
    case 'MODIFICA_SENHA':
      return {...state, senha: action.payload}

    // case 'LOGAR':
    //   return {...state, action}
      
    default:
      return state;
  }
}
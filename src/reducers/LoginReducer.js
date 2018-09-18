const INITIAL_STATE = {nome: '', email: '', senha: '', msgCadastro: ''}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'MODIFICA_EMAIL':
      return {...state, email: action.payload}
    
    case 'MODIFICA_NOME':
      return {...state, nome: action.payload}
    
    case 'MODIFICA_SENHA':
      return {...state, senha: action.payload}

    case 'CADASTRA_USUARIO_SUCESSO':
      return {...state, msgCadastro: action.payload}
      
    case 'CADASTRA_USUARIO_ERRO':
      return {...state, msgCadastro: action.payload}
      
    default:
      return state;
  }
}
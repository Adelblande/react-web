export default function contatos(state = [], action) {
  switch(action.type) {
    case 'ADD_CONTATO':
      return [...state]
      
    case 'CARREGA_CONTATOS':
      return [...action.contatos]

    case 'EXCLUIR_CONTATO':
      return [...state]
      
    case 'ALTERAR_CONTATO':
      return [...state]
      
    default:
      return state;
  }
}
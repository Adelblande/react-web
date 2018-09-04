export default function contatos(state = [], action) {
  switch(action.type) {
    case 'ADD_CONTATO':
      return [...state, action.contato]

    case 'CARREGA_CONTATOS':
      return [...state, ...action.contatos]
    
    default:
      return state;
  }
}
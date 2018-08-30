export default function contatos(state = [{nome: 'Adelblande', email: 'adel@gmail.com', telefone: '11988665544'}], action) {
  switch(action.type) {
    case 'ADD_CONTATO':
      return [...state, action.contatos]
    
    default:
      return state;
  }
}
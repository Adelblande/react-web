export default function contatos(state = [{ id: '00023', nome: 'Adelblande', email: 'adel@gmail.com', telefone: '11988665544'}], action) {
  switch(action.type) {
    case 'ADD_CONTATO':
      return [...state, action.contato]
    
    default:
      return state;
  }
}
import React from 'react';
import { connect } from 'react-redux';

const TotalContatos = (props) => {
  return (
    <div>
      <h3>Vc tem { props.contatos.length } contato(s)</h3>
    </div>
  )
}
const mapStateToProps = state => ({
  contatos: state.contatos
});

export default connect(mapStateToProps)(TotalContatos);
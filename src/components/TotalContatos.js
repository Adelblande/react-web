import React from 'react';
import { connect } from 'react-redux';

const TotalContatos = (props) => {
  return (
    <div>
      <h3>Total de contatos:  { props.contatos.length } </h3>
    </div>
  )
}
const mapStateToProps = state => ({
  contatos: state.contatos
});

export default connect(mapStateToProps)(TotalContatos);
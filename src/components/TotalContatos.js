import React from 'react';
import { connect } from 'react-redux';

const TotalContatos = (props) => {
  return (
    <div>
      <h1 className="title">Total de contatos:  { props.contatos.length } </h1>
    </div>
  )
}
const mapStateToProps = state => ({
  contatos: state.contatos
});

export default connect(mapStateToProps)(TotalContatos);
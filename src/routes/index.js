import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import FormLogin from '../components/FormLogin';
import FormCadastro from '../components/FormCadastro';
import Principal from '../components/Principal';
import history from './history';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact={true} component={FormLogin} />
      <Route path="/cadastro" component={FormCadastro} />
      <Route path="/principal" component={Principal} />
    </Switch>
  </ConnectedRouter>
);


export default Routes;
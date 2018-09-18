import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import FormLogin from '../components/FormLogin';
import FormCadastro from '../components/FormCadastro';
import history from './history';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact={true} component={FormLogin} />
      <Route path="/cadastro" component={FormCadastro} />
    </Switch>
  </ConnectedRouter>
);


export default Routes;
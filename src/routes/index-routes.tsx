import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Repository from '../pages/Repository/index-Repository';
import Dashboard from '../pages/Dashboard/index-Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* exact faz o react-router-dom acionar o Dashboard somente se o path for igual a "/" */}
    <Route path="/repositories/:repository+" component={Repository} />
    {/*
      (:repository+) indica que tudo o que vier depois da rota (/repository) será o seu destino,
      nesse caso o destino possui uma barra (facebook/react) colocando o (+) é possível o router
      isso é um destino só e não dois
    */}
  </Switch>
);

export default Routes;

import React from 'react';
import { Router, Route } from 'dva/router';
import Login from './routes/login';
import Page from './components/Page';
import Register from './routes/register';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Page} />
      <Route path="/login" component={Login} />
      <Route path="/logup" component={Register} />
    </Router>
  );
}

export default RouterConfig;

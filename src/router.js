import React from 'react';
import { Router, Route } from 'dva/router';
import Login from './routes/login';
import App from './routes/app';
import Register from './routes/register';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App} >
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
      </Route>
    </Router>
  );
}

export default RouterConfig;

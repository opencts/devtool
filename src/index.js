import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/scss/_index.scss';
import DialogProvider from './services/DialogProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Store from './services/Store';

ReactDOM.render(
  <DialogProvider>
    <Store>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <App />
          </Route>
        </Switch>
      </BrowserRouter>
    </Store>
  </DialogProvider>,
  document.getElementById('root')
);

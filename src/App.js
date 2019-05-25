import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

import './styles/App.scss';
import './styles/base.scss';

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
};

export default App;

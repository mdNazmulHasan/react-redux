import React from 'react';
import Search from './Search';
import Detail from './Detail';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <div className="m-3">
    <Search />
    <div className="my-3">
      <Detail />
    </div>
  </div>
);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
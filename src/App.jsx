import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ListImages from './Hooks/ListImages';
import './index.css';

export const App = () => {
return (
  <Provider store={store}>
    <div className="App">
      <h3>Posts</h3>
      <ListImages />
    </div>
  </Provider>
);
};
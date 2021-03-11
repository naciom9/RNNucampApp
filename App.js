import React from 'react';
import Main from './components/MainComponent';
import { Provider } from './components/MainComponent';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Main />  
    </Provider>
  );
}
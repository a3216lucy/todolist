import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { store } from './app/store';
import store from './redux/store';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import AppRoute from 'AppRoute';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { SWRConfig } from 'swr';
import { fetcher } from 'libs/axios';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <Provider store={store}>
      <ChakraProvider>
         <SWRConfig value={{ fetcher }}>
            <AppRoute />
         </SWRConfig>
      </ChakraProvider>
   </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

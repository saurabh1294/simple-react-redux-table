/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'

// ... normal setup, create store and persistor, import components etc.
import Store from "./store";
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';

const storeObj = Store() as any;

ReactDOM.render(
  <Provider store={storeObj.store}>
    <React.StrictMode>
      {/* <PersistGate loading={null} persistor={storeObj.persistor as any}> */}
        <App />
      {/* </PersistGate> */}
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
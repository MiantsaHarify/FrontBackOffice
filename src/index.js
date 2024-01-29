import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from '../src/components/Login/Login';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    <App />
  </React.StrictMode>
);

reportWebVitals();

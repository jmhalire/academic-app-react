import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

//estilos generales
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import './styles/btn.css';
import './styles/style.css';
import './styles/sidenav.css';
import './styles/table.css';
import './styles/form.css';
import './styles/courseComponent.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

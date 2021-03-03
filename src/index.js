import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './Profile';
/* import Cats from './Cats'; */
import "bootstrap/dist/css/bootstrap.min.css";
import CatHeader from './CatHeader';
import Cat from './Cat';

ReactDOM.render(
  <React.StrictMode>
    <Profile />
    <CatHeader />
    <Cat />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

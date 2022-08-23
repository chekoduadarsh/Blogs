import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './navbar';
import Content from './content';
import reportWebVitals from './reportWebVitals';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
    <img src="/wallpaper.jpg" alt="wallpaper" />
    <section id="section05" class="demo">
      <a href="#section06"><span></span>Scroll</a>
    </section>
    <div class="container reveal">
      <Content />
    </div>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

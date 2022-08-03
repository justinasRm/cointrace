import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import Header from './Components/Header';

import '../src/CSS/Header.css'
import '../src/CSS/FirstLoadScreen.css'
import '../src/CSS/Main.css';
import '../src/CSS/Signup-login.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <App />
  </React.StrictMode>
);

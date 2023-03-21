import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'typeface-roboto';


const styles = {
  fontFamily: 'Roboto'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={styles}><App /></div>
    
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function clickAlert () {
  alert("Clicked!")
}

const captureClick =  <button onClick={clickAlert}>Click Me</button>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(captureClick)
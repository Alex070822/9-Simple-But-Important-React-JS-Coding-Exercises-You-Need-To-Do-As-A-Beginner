import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function CreateButton({children}){
  return (
      <button onClick={clickAlert}>
        Button {children}
      </button>
  )
  function clickAlert () {
    alert(`You clicked on Button ${children}`)
  }
}

const element = (
    <div className="container">
      <CreateButton>1</CreateButton>
      <CreateButton>2</CreateButton>
      <CreateButton>3</CreateButton>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element)
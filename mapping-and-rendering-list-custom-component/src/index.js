import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

function MapArray() {
  return animals.map((animal) => {
    return <Item key={animal} animal={animal} icon={getIcon(animal)} />
      })
}

function getIcon(animal){
  let icon = ""
  switch (animal){
    case "dog":
      icon = '🐶'
      break
    case "cat":
      icon = '🐱'
      break
    case "chicken":
      icon = '🐔'
      break
    case "cow":
      icon = '🐮'
      break
      case "sheep":
      icon = '🐑'
      break
    case "horse":
      icon = '🐴'
      break
    default:
      icon = ' '
  }
  return icon
}

function Item(props){
  return <div className="children">{props.icon}{props.animal}</div>
}

const element = (
    <div className="container">
      <MapArray></MapArray>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element)

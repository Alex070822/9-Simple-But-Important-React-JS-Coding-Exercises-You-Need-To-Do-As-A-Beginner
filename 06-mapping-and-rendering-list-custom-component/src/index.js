import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

function CustomAnimals() {
  return animals.map((animal) => {
    return <Item key={animal} animal={animal} />
      })
}

function Item(props){
  const icon = getIcon(props.animal)
  const name = props.animal

  return <div className="item-container">{icon} <span className="animal-name">{name}</span></div>
}

function getIcon(animal){
  switch (animal){
    case "dog":
      return '🐶'
    case "cat":
      return '🐱'
    case "chicken":
      return '🐔'
    case "cow":
      return '🐮'
    case "sheep":
      return '🐑'
    case "horse":
      return '🐴'
  }
}


const element = (
    <div className="root-container">
      <CustomAnimals></CustomAnimals>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element)

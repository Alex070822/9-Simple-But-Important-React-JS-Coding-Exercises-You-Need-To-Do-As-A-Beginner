import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function AnimalList(props) {
  const animals = props.animals
  const listItems = animals.map((animal) =>
      <li key={animal}>
        {animal}
      </li>
  )
  return (
      <ul>{listItems}</ul>
  )
}

const animalArray = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AnimalList animals={animalArray} />)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

interface AnimalsProps {
  name: string
  translation: string
  isQuadruped: boolean
}

const animals: AnimalsProps[] = [
  {name: 'dog', translation: 'perro', isQuadruped: true},
  {name: 'cat', translation: 'gato', isQuadruped: true},
  {name: 'chicken', translation: 'pollo', isQuadruped: false},
  {name: 'duck', translation: 'pato', isQuadruped: false},
  {name: 'cow', translation: 'vaca', isQuadruped: true},
  {name: 'sheep', translation: 'oveja', isQuadruped: true},
  {name: 'horse', translation: 'caballo', isQuadruped: true}
]

function AnimalList() {
  return (
      <ul>
        {
          animals
          .filter(animal => !animal.isQuadruped)
          .map((animal) => {
            return <li key={animal.name}>
                  {animal.name} = {animal.translation}
                </li>
              })
        }
      </ul>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(<AnimalList />)
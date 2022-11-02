import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Divider(){
  return <div style={{marginTop: 10, marginBottom:10}}></div>
}

function CustomButton({id, color}){
  return (
      <button style={{
        backgroundColor: color,
        width: 150,
        height: 60,
        cursor: "pointer"
      }}  onClick={showAlert}>
        Button {id}
      </button>
  )

  function showAlert () {
    alert(`You clicked on Button ${id}`)
  }
}
/*
const buttonGroup = (
    <div className="container">
      <CustomButton id={"1"}></CustomButton>
      <CustomButton id="2"/>
      <CustomButton id="3"/>
    </div>
)
*/

const buttonConfig = [
  {
    id: "1",
    key: 1,
    color: 'green'
  },
  {
    id: "2",
    key: 2,
    color: 'white'
  }, {
    id: "3",
    key: 3,
    color: 'red'
  }
]

interface IButtonConfigProps {
  id: string
  key: number
  color: string
}

const buttonGroup = (
    <>
      {/* with individual props */}
      <div className="container">
        {
          buttonConfig.map(({id, key, color}:IButtonConfigProps) => {
            return <CustomButton key={key} id={id} color={color}/>
          })
        }
      </div>

      <Divider/>

      {/* with spread props */}

      <div className="container">
        {
          buttonConfig.map((props: IButtonConfigProps) => {
            return <CustomButton {...props}/>
          })
        }
      </div>
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(buttonGroup)

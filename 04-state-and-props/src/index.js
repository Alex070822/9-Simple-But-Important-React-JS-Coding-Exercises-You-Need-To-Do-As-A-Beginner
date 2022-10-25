import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function ClickCounter(props) {
  console.log("# props:", props)
  const [count, setCount] = useState(props.initialCount);

  return(
      <>
        <p>Button has been clicked: {count} times</p>
        <button onClick={()=> setCount(count + props.increment)}>
          Click Me
        </button>
        <button onClick={()=> setCount(props.initialCount)}>
          Reset
        </button>
      </>
  )
}

const element  = (
    <>
      {/* {increment:1, initialCount:10} */}
      <ClickCounter increment={1} initialCount={10}></ClickCounter>
      <ClickCounter increment={2} initialCount={20}></ClickCounter>
      <ClickCounter increment={3} initialCount={30}></ClickCounter>
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element)

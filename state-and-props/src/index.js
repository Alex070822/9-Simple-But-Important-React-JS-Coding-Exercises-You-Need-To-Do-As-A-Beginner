import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function ClickCounter() {
  const [count, setCount] = useState(0);

  return(
      <div>
        <p>Button has been clicked: {count} times</p>
        <button onClick={()=> setCount(count+1)}>
          Click Me
        </button>
      </div>
  )
}

const captureClick = (
    <ClickCounter></ClickCounter>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(captureClick)
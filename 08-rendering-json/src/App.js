import './App.css';

const jokes = [
  {
    id: 1,
    setup: "What's the best thing about a Boolean?",
    punchline: "Even if you're wrong, you're only off by a bit."
  },
  {
    id: 2,
    setup: "Why do programmers wear glasses?",
    punchline: "Because they need to C#."
  }
]

function JokeCard({setup, punchline}){
  return (
      <div className="card">
        <div className="setup">{setup}</div>
        <div className="punchline">{punchline}</div>
      </div>
  )
}


function App() {
  return (
      <div className="background">
        {
          jokes.map(({id, setup, punchline}) => (
            <JokeCard key={id} setup={setup} punchline={punchline}/>
            )
          )
        }
      </div>
  )
}


export default App;

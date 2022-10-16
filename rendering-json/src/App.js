import jokesList from "./jokesList";
import './App.css';

function App() {
  const map = (
      jokesList.map(joke =>(
          <JokeCard key={joke.id} setup={joke.setup} punchline={joke.punchline}/>
      ))
  )
  return (
      <div className="background">{map}</div>
  )
}

function JokeCard({setup, punchline}){
  return (
      <div className="card">
        <div className="setup">{setup}</div>
        <div className="punchline">{punchline}</div>
      </div>
  )
}

export default App;

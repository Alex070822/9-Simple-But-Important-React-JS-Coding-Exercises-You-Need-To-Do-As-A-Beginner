import './App.css';

function UserNameForm({onSubmitName}) {
  function handleSubmit(event){
    event.preventDefault()
    console.dir(event.target.elements.firstNameInput.value)
    const firstName = event.target.elements.firstNameInput.value
    const lastName = event.target.elements.lastNameInput.value
    onSubmitName ([firstName, lastName])
  }
  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input id="firstNameInput" type="text" placeholder="First name"/>
        </div>
        <div>
          <input id="lastNameInput" type="text" placeholder="Last name"/>
        </div>
        <button type="submit">GREET ME</button>
      </form>
  )
}

function App() {
  const onSubmitName = username => alert(`Hello ${username[0]} ${username[1]}!`)
  return <UserNameForm onSubmitName={onSubmitName}/>
}

export default App;

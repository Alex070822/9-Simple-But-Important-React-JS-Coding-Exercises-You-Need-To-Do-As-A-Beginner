import './App.css';

function CustomForm() {
  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input id="firstNameInput"
                 type="text"
                 placeholder="First name"/>
        </div>
        <div>
          <input id="lastNameInput"
                 type="text"
                 placeholder="Last name"/>
        </div>
        <button type="submit">Greet me</button>
      </form>
  )
}

function handleSubmit(event){
  event.preventDefault()

  const firstName = event.target.elements.firstNameInput.value
  const lastName = event.target.elements.lastNameInput.value

  const msg = getGreetingMsg(firstName, lastName)

  alert(msg)
}

function getGreetingMsg(firstName, lastName){
  return `Hello ${firstName} ${lastName}!`
}

function App() {
  return <CustomForm/>
}

export default App;

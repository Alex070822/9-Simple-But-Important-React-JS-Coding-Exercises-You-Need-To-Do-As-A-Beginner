import "./App.css";
import { useState } from "react";

// using multiple objects for the full state

/*function CustomForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <form>
      <div>
        <input
          id="firstNameInput"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          type="text"
          placeholder="First name"
        />
      </div>
      <div>
        <input
          id="lastNameInput"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          type="text"
          placeholder="Last name"
        />
      </div>
      <button type="button" onClick={() => handleSubmit(firstName, lastName)}>
        Greet me
      </button>
    </form>
  );
}*/

interface FullName {
  firstName: string;
  lastName: string;
}

// using an single object for the full state

function CustomForm() {
  const [fullName, setFullName] = useState<FullName>({
    firstName: "",
    lastName: "",
  });

  return (
    <form>
      <div>
        <input
          id="firstNameInput"
          value={fullName.firstName}
          onChange={(event) => {
            setFullName({
              firstName: event.target.value,
              lastName: fullName.lastName,
            });
          }}
          type="text"
          placeholder="First name"
        />
      </div>
      <div>
        <input
          id="lastNameInput"
          value={fullName.lastName}
          onChange={(event) => {
            setFullName({
              firstName: fullName.firstName,
              lastName: event.target.value,
            });
          }}
          type="text"
          placeholder="Last name"
        />
      </div>
      <button
        type="button"
        onClick={() => handleSubmit(fullName.firstName, fullName.lastName)}
      >
        Greet me
      </button>
    </form>
  );
}

function handleSubmit(firstName, lastName) {
  const msg = getGreetingMsg(firstName, lastName);

  alert(msg);
}

function getGreetingMsg(firstName, lastName) {
  return `Hello ${firstName} ${lastName}!`;
}

function App() {
  return <CustomForm />;
}

export default App;

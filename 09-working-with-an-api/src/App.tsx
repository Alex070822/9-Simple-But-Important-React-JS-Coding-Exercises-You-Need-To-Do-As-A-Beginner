import { useState, useEffect } from "react"
import CardInfo from "./card-info"
import "./App.css"

const endpointUrl = "https://random-data-api.com/api/users/random_user?size=10"

function App() {
  const [model, setModel] = useState({
    items: [],
    shouldLoadItems: true,
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(endpointUrl)
      const data = await response.json()

      setModel({
        items: data,
        shouldLoadItems: false,
      })
    }

    if(model.shouldLoadItems){
      fetchData()
    }

  }, [model.shouldLoadItems])

  function fetchRandomData() {
    setModel((prevState) => {
      return {
        ...prevState,
        shouldLoadItems: true,
      }
    })
  }

  return (
    <div className="container">
      <button onClick={fetchRandomData}>Fetch Random</button>
      <div className="background">
        {
          model.items.map((item) => (
              <CardInfo
                  key={item.id}
                  avatar={item.avatar}
                  name={`${item.first_name} ${item.last_name}`}
                  title={item.employment.title}
                  email={item.email}
                  phoneNumber={item.phone_number}
                  address={`${item.address.city}, ${item.address.state}`}
              />
          ))
        }
      </div>
    </div>
  )
}

export default App

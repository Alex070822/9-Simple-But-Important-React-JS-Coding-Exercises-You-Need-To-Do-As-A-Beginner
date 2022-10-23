import { useState, useEffect } from "react"
import CardInfo from "./cardInfo"
import "./App.css"

function App() {
  const [itemList, setItemList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (isLoading) {
      const fetchData = async () => {
        const response = await fetch(
          "https://random-data-api.com/api/users/random_user?size=10"
        )
        const data = await response.json()
        setItemList(data)
        setIsLoading(false)
      }
      fetchData()
    }
  }, [isLoading])
  function ItemsView() {
    return itemList.map((item) => (
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
  function loadingChange() {
    setIsLoading(true)
  }
  return (
    <div className="container">
      <button onClick={loadingChange}>Fetch Random</button>
      <div className="background">
        <ItemsView />
      </div>
    </div>
  )
}

export default App

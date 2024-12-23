import { useState } from 'react'
import './App.css'
import Country from './components/Country'

function App() {

  const [country, setCountry] = useState("India")
  return (
    <>
      <div>
        <h1>Welcome to React JS !</h1>
        <Country country={country} />
      </div>
    </>
  )
}

export default App
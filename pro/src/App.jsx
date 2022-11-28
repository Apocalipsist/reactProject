import React, { useState } from 'react'
import SearchBar from './search'
import Navbar from "./components/Navbar";
import StudentDisplay from "./components/StudentDisplay";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <div className="container">
      <h1>Kekambas Students</h1>
      <StudentDisplay />
    </div>
  
    </>
  )
}

export default App

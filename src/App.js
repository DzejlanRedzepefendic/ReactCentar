import React from 'react'
import './App.css'
import Welcome from './Welcome'
function App() {
  const names = ['Suad', 'Blaa', 'Arijan', 'Truc']
  return (
    <div className='App'>
      {names.map((value, index) => {
        return <Welcome name={value} key={index} />
      })}
    </div>
  )
}

export default App

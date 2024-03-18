// src/App.js
import React from 'react'
import Capitals from './components/Capitals'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Countries And Capitals</h1>
      </header>
      <main>
        <Capitals countryAndCapitalsList={countryAndCapitalsList} />
      </main>
    </div>
  )
}

export default App

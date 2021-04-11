import './App.css';
import React, { useState } from 'react'
import Form from './Form'

function App() {

  const [team, setTeam] = useState([])
  const [nande, setNAndE] = useState([])

  const submit = (event) => {
    event.preventDefault()
    console.log('WOrking')
  }

  const input = (event) => {
    event.preventDefault()
    setNAndE(event.target.value)
  }

  return (
    <div className="App">
      <Form input={input} submit={submit} nande={nande}/>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react'
import Form from './Form'
import Team from './Team'

const initialFormValues = {
  name: '',
  email: '',
  role:'',
}

function App() {

  const [team, setTeam] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const submit = () => {
    const teamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if(!teamMember.name || !teamMember.email || !teamMember.role) {
      return
    }else {
      setTeam([ ...team, teamMember ])
      setFormValues(initialFormValues)
    }
  }

  const updateForm = (name, value) => {
        setFormValues({...formValues, [name]:value})
  }

  return (
    <div className="App">
      <Form update={updateForm} submit={submit} formValues={formValues}/>
      {team.map( (member,index) => {
        return (
          <Team member={member} key={index}/>
        )
      })}
    </div>
  );
}

export default App;

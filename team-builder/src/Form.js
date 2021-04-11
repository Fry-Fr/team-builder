import React from 'react'
import './App.css';

const Form = (props) => {
    const { formValues, submit, update} = props

    const input = (event) => {
        const {name, value} = event.target      
        update(name,value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        submit()
    }

    return (
        <div>
            <form id='my_form' onSubmit={onSubmit}>

                    <label>Name:</label>
                        <input value={formValues.name} type='text' name='name' onChange={input}/>
                    
                    <label>Email:</label>
                        <input value={formValues.email} type='email' name='email' onChange={input}/>
                    
                    <label>Role:</label>
                        <select value={formValues.role} name='role' onChange={input}>
                            <option value=''>select your role</option>
                            <option value='backend engineer'>backend engineer</option>
                            <option value='frontend engineer'>frontend engineer</option>
                            <option value='designer'>designer</option>
                            <option value='something else'>something else</option>
                        </select>
                    
                    <button>Submit</button>
            </form>
        </div>
    )
}
export default Form
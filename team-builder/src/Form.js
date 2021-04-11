import React from 'react'
import './App.css';

const Form = (props) => {
    const {submit, input} = props
    return (
        <div>
            <form id='my_form'>
                <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' onChange={input}/>
                
                <label htmlFor='email'>Email:</label>
                    <input type='text' name='email' onChange={input}/>
                
                <label htmlFor='role'>Role:</label>
                    <select>
                        <option>select your role</option>
                        <option>backend engineer</option>
                        <option>frontend engineer</option>
                        <option>designer</option>
                        <option>something else</option>
                    </select>
                
                <button onClick={submit}>Submit</button>
            </form>
        </div>
    )
}
export default Form
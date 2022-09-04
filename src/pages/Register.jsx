import { useState } from 'react'
import axios from 'axios'
import './register.css'

export default function Register() {
  const [inputValues, setInputValues] = useState({})

  function updateInputValues(event) {
    setInputValues(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  function registerUserApi() {
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/user/register`, {
      name: inputValues.name,
      email: inputValues.email,
      password: inputValues.password
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <main className="register_page-body">
      <div className="main_box-register">
        <p className='textInputRegister'>Sign up</p>

        <input
          className='inputRegister'
          placeholder='User name'
          name='name'
          onChange={updateInputValues} />

        <input
          className='inputRegister'
          placeholder='Email'
          name='email'
          onChange={updateInputValues} />

        <input
          className='inputRegister'
          placeholder='Password'
          name='password'
          onChange={updateInputValues} />

        <button
          className='buttonRegister'
          onClick={registerUserApi}>Sign up</button>
      </div>
    </main>
  )
}

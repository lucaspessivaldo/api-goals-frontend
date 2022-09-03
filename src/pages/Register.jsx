import { useState } from 'react'
import './register.css'

export default function Register() {
  const [inputValues, setInputValues] = useState({})

  function updateInputValues(event) {
    setInputValues(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <main className="register_page-body">
      <div className="main_box-register">
        <p>Sign up</p>

        <input
          placeholder='User name'
          name='name'
          onChange={updateInputValues} />

        <input
          placeholder='Email'
          name='email'
          onChange={updateInputValues} />

        <input
          placeholder='Password'
          name='password'
          onChange={updateInputValues} />

        <button>Sign up</button>
      </div>
    </main>
  )
}

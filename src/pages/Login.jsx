import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [inputValues, setInputValues] = useState({})
  const navigate = useNavigate()

  function updateInputValues(event) {
    setInputValues(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  function loginUserApi() {
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/user/login`, {
      email: inputValues.email,
      password: inputValues.password
    })
      .then((res) => {
        localStorage.setItem('tokenJWT', res.data.token)
        console.log('user logged')
        navigate('/')
      })
  }

  return (
    <main className="login_page-body">
      <div className="main_box-login">
        <p className='textInputLogin'>Sign in</p>

        <input
          className='inputLogin'
          placeholder='Email'
          name='email'
          onChange={updateInputValues} />

        <input
          className='inputLogin'
          placeholder='Password'
          name='password'
          onChange={updateInputValues} />

        <button
          className='buttonLogin'
          onClick={loginUserApi}>Sign in</button>
      </div>
    </main>
  )
}

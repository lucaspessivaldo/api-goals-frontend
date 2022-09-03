import './login.css'

export default function Login() {
  return (
    <main className="login_page-body">
      <div className="main_box-login">
        <p>Sign in</p>
        <input placeholder='Email'></input>
        <input placeholder='Password'></input>
        <button>Sign in</button>
      </div>
    </main>
  )
}

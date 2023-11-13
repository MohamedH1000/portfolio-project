import React from 'react'
import './css/login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// login page design
const Login = () => {
  const [showpass, setShowpass] = useState(true)

  const handleClick = () => {
    setShowpass(!showpass)
  }
  return (
    <section className='login-section'>
        <form className='login-form'>
          <div className="login-header">
            <h1>Login</h1>
          </div>
          <label for="uname" className='login-user-label'>user name:</label>
          <input type="text" id='uname' placeholder='username' className='login-input' style={{outline:'none'}}/>
          <label for='password' className='login-password-label'>password:</label>
          <input type={showpass ? 'password': 'text'} id='password' placeholder='password' className='login-input' style={{outline:'none'}}/>
          <div className="login-show">
            <input type='checkbox' id='spass' onClick={handleClick}/>&nbsp;&nbsp;
            <label for="spass">show password</label>
          </div>
          <button className="login-button">Login</button>
          <div className="login-havnt">
            <p>Don't have an account ?</p>
            <Link to='/register' style={{textDecoration:'none', color:'var(--text-color)'}}><p className="login-sign">Sign Up</p></Link>
          </div>
        </form>
    </section>
  )
}

export default Login
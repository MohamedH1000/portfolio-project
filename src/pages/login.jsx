import React from 'react'
import './css/login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// login page design
const Login = () => {
  const [showpass, setShowpass] = useState(false);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const handleClick = () => {
    setShowpass(!showpass)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
  }

  return (
    <section className='login-section'>
        <form className='login-form' onClick={handleSubmit}>
          <div className="login-header">
            <h1>Login</h1>
          </div>
          <label for="uname" className='login-user-label'>User Name:</label>
          <input 
              type="text"
              id='uname'
              placeholder='username'
              className='login-input'
              style={{outline:'none'}}
              required
              value={user}
              onChange={(e) => setUser(e.target.value)}
          />
          <label for='password' className='login-password-label'>Password:</label>
          <input 
              type={showpass ? 'text': 'password'} 
              id='password' placeholder='password' 
              className='login-input' 
              style={{outline:'none'}}
              required
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
          />
          <div className="login-show">
            <input 
                type='checkbox' 
                id='spass' 
                onClick={handleClick}/>&nbsp;&nbsp;
            <label for="spass">show password</label>
          </div>
          <button className="login-button">Login</button>
          <div className="login-havnt">
            <p>Don't have an account ?</p>
            <Link to='/eg-ar/register' style={{textDecoration:'none', color:'var(--text-color)'}}><p className="login-sign">Sign Up</p></Link>
          </div>
        </form>
    </section>
  )
}

export default Login
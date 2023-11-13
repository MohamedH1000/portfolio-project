import React from 'react'
import { Link } from 'react-router-dom'
import './css/register.css'
import { useState } from 'react'

// register page design
const Register = () => {
  const [event, setEvent] = useState(true)

  const handleClick = ()=>{
    setEvent(!event)
  }
  return (
    <section className='register-section'>
        <form className='register-form'>
          <div className="register-header">
            <h1>Register</h1>
          </div>
          <label for="uname" className='register-user-label'>user name:</label>
          <input type="text" id='uname' placeholder='username' className='register-input' style={{outline:'none'}}/>
          <label for="uemail" className='register-user-label'>Email</label>
          <input type='email' id='uemail' placeholder='email' className='register-input' style={{outline:'none'}}/>
          <label for='password' className='register-password-label'>password:</label>
          <input type='password' id='password' placeholder='password' className='register-input' style={{outline:'none'}}/>
          <label for='passwordconf' className='register-password-label'>Confirm password</label>
          <input type="password" className="register-input" placeholder='confirm password' style={{outline:'none'}}/>
          <div className="register-show">
            <input type='checkbox' id='spass' onClick={handleClick}/>&nbsp;&nbsp;
            <label for="spass" style={{color:'black'}}>I agree to the <span style={{color:'var(--text-color)'}} className='register-agree'>terms and condition</span></label>
          </div>
          <button className="register-button" disabled={event===true}>Register</button>
          <div className="register-havnt">
            <p>Already have an account ?</p>
            <Link to='/login' style={{textDecoration:'none', color:'var(--text-color)'}}><p className="register-sign">Sign in</p></Link>
          </div>
        </form>
    </section>
  )
}

export default Register
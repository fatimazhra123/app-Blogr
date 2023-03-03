import React from "react"
import "./login.css"
import { Link } from "react-router-dom"
import back from "../../assets/images/my-account.jpg"

export const Login = () => {
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form>
            <span>Username or email address *</span>
            <input type='text' required />
            <span>Password *</span>
            <input type='password' required />
            <button className='button'>Log in</button>
            
            <Link to='/register' className='link'>
               Don't have an account ? Register here
            </Link>
          </form>
        </div>
      </section>
    </> 
  )
}

import React from 'react'

const login = () => {
  return (
    <div>
      <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text" placeholder='username' required />
            </div>
            <div className='input-box'>
            <input type="text" placeholder='password' required />
            </div>
            <div className='remember-fogot'>
               <label> <input type="checkbox" />Remember me</label>
               <a href="#">Fogot password</a> 
            </div>
            <button type='submit' className='btn-login'>Login</button>
            <div className='register'>
                <p>Do you have account <a href="#">Register</a></p>
            </div>
        </form>   
      </div>

    </div>
  )
}

export default login

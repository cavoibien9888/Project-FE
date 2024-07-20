import React, {useState} from 'react'
import './loginForm.scss'

function LoginForm() {
    // const [showForgotPassword, setShowForgotPassword] = useState(false);

    // const toggleForgotPassword = () => {
    //   setShowForgotPassword(!showForgotPassword);
    // };

    const [view, setView] = useState('login'); // 'login', 'register', 'forgotPassword'

    const toggleView = (newView) => {
      setView(newView);
    };
  return (
    <div>
        {view === 'login' && (
            <form>
              <h2>Đăng nhập</h2>
              <label className='title'>Tên Đăng Nhập:</label>
              <input type="text" placeholder='nhập tên đăng nhập' required/>
              <label className='title'>Password:</label>
              <input type="password" placeholder='nhập mật khẩu' required/>
              <button className='btn' type="submit">Đăng nhập</button>
              <p onClick={() => toggleView('forgotPassword')}>
                Quên mật khẩu?
              </p>
              <h3>Or</h3>
              <p onClick={() => toggleView('register')}>
                 ĐĂNG KÝ
              </p>
            </form>
          )}
          
          {view === 'register' && (
            <form>
              <h2>Đăng ký</h2>
              <label className='title' >Tên Đăng Nhập:</label>
              <input type="text" placeholder='nhập tên đăng nhập' required/>
              <label className='title' >Email:</label>
              <input type="email" placeholder='nhập email' required/>
              <label className='title'>Password:</label>
              <input type="password" placeholder='nhập mật khẩu' required/>
              <button className='btn' type="submit">Đăng ký</button>
              <p onClick={() => toggleView('login')}>
                Quay lại đăng nhập
              </p>
            </form>
          )}
          
          {view === 'forgotPassword' && (
            <form>
              <h2>Quên mật khẩu</h2>
              <label className='title'>Email:</label>
              <input type="email" placeholder='nhập email' required/>
              <button className='btn' type="submit">Gửi yêu cầu</button>
              <p onClick={() => toggleView('login')}>
                Quay lại đăng nhập
              </p>
            </form>
          )}

    </div>
  )
}

export default LoginForm

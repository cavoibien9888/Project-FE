import React, {useState} from 'react'
import './loginForm.scss'

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi dữ liệu đăng nhập đến server
    console.log('Đang đăng nhập...');
    // Xử lý kết quả trả về từ server
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='usename title'>Tên đăng nhập:</label>
        <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label className='password title'>Mật khẩu:</label>
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" className='btn'>Đăng nhập</button>
        <p>Or</p> 
        <button className='register-btn'>Đăng Ký</button>
      </form>
    </div>
  )
}

export default LoginForm

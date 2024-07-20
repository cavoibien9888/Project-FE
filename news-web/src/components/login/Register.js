import React, {useState} from 'react'
import './loginForm.scss'

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gửi dữ liệu đăng ký đến server
        console.log('Đang đăng ký...');
        // Xử lý kết quả trả về từ server
  };
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label className='title'>Tên đăng nhập:</label>
        <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
        <label  className='title' >Email:</label>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <label  className='title' >Mật khẩu:</label>
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='btn' type="submit">Đăng ký</button>
        </form>
    </div>
  )
}

export default Register

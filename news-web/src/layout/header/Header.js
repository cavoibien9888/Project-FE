import React, {useState} from 'react';
import './Header.scss';
import FormSearch from '../../components/FormSearch';
import { Link, NavLink } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import LoginForm from '../../components/login/LoginForm'
import RegisterForm from '../../components/login/Register'

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [activeForm] = useState('login');    
    return (
        <div>
            <div className="header">
                <Link to="/" className="logo">
                    <img srcSet="logo-web-white.png" alt="" />
                </Link>
                {/*<FormSearch></FormSearch>*/}
                {/*<div className="day">Chủ Nhật, 07/05/2023, 15:50:51 GMT+7</div>*/}
                <button className='btn' onClick={handleShow}>
                    Đăng nhập
                </button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <h2>{activeForm === 'login' ? 'Đăng nhập' : 'Đăng ký'}</h2>
                    </Modal.Header>
                    <Modal.Body>
                        {activeForm === 'login' && (
                            <LoginForm handleClose={handleClose} />
                        )}
                        {activeForm === 'register' && (
                            <RegisterForm handleClose={handleClose} />
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button> */}
                    </Modal.Footer>
                </Modal>
                <a href="history" className='history-icon'>
                    Lịch sử xem
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </a>
                {/* <Link to="history">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </Link> */}
            </div>
        </div>
    );
};

export default Header;
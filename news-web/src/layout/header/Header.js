import React, {useState} from 'react';
import './Header.scss';
import FormSearch from '../../components/FormSearch';
import { Link, NavLink } from 'react-router-dom';

import Modal from 'react-modal';
import LoginForm from '../../components/login/LoginForm'

Modal.setAppElement('#root');

const Header = () => {
        
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleClose = () => setModalIsOpen(false);
    const handleShow = () => setModalIsOpen(true);

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

                <Modal isOpen={modalIsOpen} 
                       onRequestClose={handleClose} 
                       contentLabel="Form Modal" 

                       style={{
                        content: {
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '500px',
                          height: '500px',
                          background: 'white',
                          padding: '20px',
                          border: '1px solid #ccc',
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                          borderRadius: '8px'
                        },
                        overlay: {
                          position: 'fixed',
                          top: '0',
                          left: '0',
                          right: '0',
                          bottom: '0',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)'
                        }
                      }}>
                        <button onClick={() => setModalIsOpen(false)}
                                style={{position:'absolute', top: '0', right: '0', 
                                        padding: '5px', border: 'none', backgroundColor: 'white'}}
                        >X</button>
                    <LoginForm/>
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
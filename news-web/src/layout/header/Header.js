import React from 'react';
import './Header.scss';
import FormSearch from '../../components/FormSearch';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="header">
                <Link to="/" className="logo">
                    <img src="https://cdnstatic.baotintuc.vn/web_images/baotintuc-logo.png" alt="" />
                </Link>
                <div className="bannerTop">
                    <a>
                        <img src="https://media.baotintuc.vn/Upload/QKrAM3u3JmfSk084HTqfEg/files/2024/07/Banner-Vidanitaxa-moi-den.jpg" alt=""/>
                    </a>
                    <a>
                        <img src="https://media.baotintuc.vn/Upload/QKrAM3u3JmfSk084HTqfEg/files/2024/07/Banner-Vidanitaxa-moi-den.jpg" alt=""/>
                    </a>
                </div>
                {/*<FormSearch></FormSearch>*/}
                {/*<div className="day">Chủ Nhật, 07/05/2023, 15:50:51 GMT+7</div>*/}
                <a href="http://localhost:3000/history" className='history-icon'>
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
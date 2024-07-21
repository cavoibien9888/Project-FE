import React from 'react';
import { Link } from 'react-router-dom';

// files & pages
import '../../sass/header.scss';
import LogoImage from '../../images/tintuc.png';

const Header = () => {
    return (
        <header id='header'>

            <div className="header">
                <Link to="/" className="logo">
                    <img srcSet="logo-web-white.png" alt="" />
                </Link>
                
                <a href="history" className='history-icon'>
                    Lịch sử xem
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </a>
                
            </div>


        </header>
    );
};

export default Header;
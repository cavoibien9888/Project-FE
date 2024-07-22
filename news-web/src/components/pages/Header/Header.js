import React from 'react';
import { Link } from 'react-router-dom';

// files & pages
import '../../sass/header.scss';
import LogoImage from '../../images/tintuc.png';
import PhoneImage from '../../images/phone.svg';
import EmailImage from '../../images/email.svg';
import FormSearch from './FormSearch';
import Navigation from '../../layout/Navigation/Navigation';
import DateTime from './DateTime';

const Header = ({ onSearch }) => {
    return (
        <header id='header'>
            <div id='header_coSe'>
                <div id='header_coSe-blk'>
                    <div id='header_contacts'>
                        <div id='header_contacts-email'>
                            <img src={EmailImage} alt="email icon" className='header_email-icon' />
                            <p className='header_contact-text'>fitNLU@gmail.com</p>
                        </div>
                        <div id='header_contacts-phone'>
                            <img src={PhoneImage} alt="phone icon" className='header_phone-icon' />
                            <p className='header_contact-text'>0379383465</p>
                        </div>
                    </div>
                    <div id="header_seUser">
                        <div id='header_search'>
                            <FormSearch onSearch={onSearch} />
                        </div>
                        <div id="header_account">
                            <Link to="/history" className='history-icon'>
                                <p className='history-text'>Lịch sử xem</p>
                                <i className="fa-solid fa-clock-rotate-left"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id='header_img'>
                <a href="/">
                    <img src={LogoImage} alt='Logo Web' className='header-logo' />
                </a>
            </div>
            <div id='header_nav'>
                <Navigation />
            </div>
            <div id='header_eventDate'>
                <div id='header_eventDate-blk'>
                    <div id='header_blk'>
                        <div id='header_event'>
                            <p id='header_event-text'>
                                
                            </p>
                        </div>
                        <div id='header_date'>
                            <DateTime />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

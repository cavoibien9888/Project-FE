import React from 'react';

// pages & file
import '../../sass/header.scss';
import LogoImage from '../../images/tintuc.png';
import MenuHeaderRouter from '../../router/MenuItems';
import PhoneImage from '../../images/phone.svg';
import EmailImage from '../../images/email.svg';

function Header() {
  return (
    <header id='header'>
      <div id='header_coSe'>
        <div id='header_coSe-blk'>
          <div id='header_contacts'>
            <div id='header_contacts-email'>
              <img src={EmailImage} alt="email icon" className='header_email-icon'/>
              <p className='header_contact-text'>fitNLU@gmail.com</p>
            </div>
            <div id='header_contacts-phone'>
              <img src={PhoneImage} alt="phone icon" className='header_phone-icon'/>
              <p className='header_contact-text'>0379383465</p>
            </div>
          </div>
          <div id="header_seUser">
            <div id='header_search'>
              <input type='search' 
                id='header_search-input' 
                aria-label='Thanh tìm kiếm'
                placeholder='Tìm kiếm...'
              />
              <div id='header_search-icon'>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div id="header_account">
              <a href='/dang-nhap' className='header_btn-signin'>Đăng nhập</a>
            </div>
          </div>
        </div>
      </div>
      <div id='header_img'>
        <a href='/' >
          <img src={LogoImage} alt='Logo Web' className='header-logo'/>
        </a>
      </div>
      <div id='header_nav'>
        <ul id='header_list'>
          {MenuHeaderRouter.map((item) => (
            <li key={item.path} className='header_list-item'>
              <a href={item.path} className={'header_title-text' + (item.addClass ? item.addClass : '')}>
                {item.icon && <i className={item.icon}></i>}
                {!item.icon && item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}


export default Header;

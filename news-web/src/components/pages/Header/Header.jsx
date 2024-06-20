import React from 'react';

// pages & file
import '../../css/header.css';
import LogoImage from '../../images/tintuc.png';
import MenuHeaderRouter from '../../router/MenuRouter';

function Header() {
  return (
    <header id='header'>
      <div id='header_coSe'>
        <div id='header_coSe-blk'>
          <div id='header_contacts'>
            <p className='header-email header_contact-text'>fitNLU@gmail.com</p>
            <p className='header-phone header_contact-text'>0379383465</p>
          </div>
          <div id='header_search'>
            <input type='search'/>
            <div id='header_search-icon'>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
      <div id='header_img'>
        <a href='/'>
          <img src={LogoImage} alt='Logo Web' className='header-logo'/>
        </a>
      </div>
      <div id='header_nav'>
        <ul id='header_list'>
          {MenuHeaderRouter.map((item) => (
            <li key={item} className='header_list-item'>
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

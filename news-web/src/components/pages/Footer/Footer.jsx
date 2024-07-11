import React from 'react';

import '../../sass/styles.css';
import LogoImage from '../../images/tintuc.png';
import MenuFooterRouter from '../../router/MenuRouter';

function Footer() {
  return (
    <footer id='footer'>
      <div id='footer_nav'>
        <ul id='footer_list'>
          {MenuFooterRouter.slice(0, -1).map((item, index) => (
            <li key={index} className='footer_list-item'>
              <a href={item.path} className={'footer_title-text' + (item.addClass ? item.addClass : '')}>
                {item.icon && <i className={item.icon}></i>}
                {!item.icon && item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div id='footer_contents'>
        <div id='footer_title'>
          <p className='footer_title-info'>
            Thông tin của chính phủ do NLU phát hành
          </p>
        </div>
        <div id='footer_info'>
          <div id='footer_info-blk1'>
            <img src={LogoImage} className='blk1_img-logo' alt=""/>
            <div id='name_eic-blk'>
              <p id='name_eic-title'>
                Tổng biên tập: 
              </p>
              <p id='name_eic'>
                Trần Tấn Lộc
              </p>
            </div>
          </div>
          <div id='footer_info-blk2'>
            <img src={LogoImage} className='blk1_img-logo' alt=""/>
          </div>
          <div id='footer_info-blk3'>
            <img src={LogoImage} className='blk1_img-logo' alt=""/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
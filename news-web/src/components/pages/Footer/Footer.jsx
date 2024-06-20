import React from 'react';

import '../../css/footer.css';
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
      </div>
    </footer>
  )
}

export default Footer;
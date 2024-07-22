import React from 'react';

// pages & file
import '../../sass/footer.scss';
import LogoImage from '../../images/tintuc.png';
import MenuFooterRouter from '../../route/MenuItems';

function Footer() {
  return (
    <footer id='footer'>
      <div id='footer-blk'>
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
              Kênh thông tin của chính phủ do NLU phát hành
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
              <p className='footer_contacts-text'>
                <b className='footer_contacts-textBold'>Tòa soạn: </b>
                Khu phố 6, phường Linh Trung, Tp.Thủ Đức, HCM
              </p>
              <p className='footer_contacts-text'>
                <b className='footer_contacts-textBold'>Điện thoại: </b>
                0379383465
              </p>
              <p className='footer_contacts-text'>
                <b className='footer_contacts-textBold'>Tòa soạn: </b>
                037-79383465
              </p>
              <p className='footer_contacts-text'>
                <b className='footer_contacts-textBold'>Email: </b>
                fitNLU@gmail.com
              </p>
            </div>
            <div id='footer_info-blk3'>
              <p className='footer_warning-text'>© Bản quyền thuộc về Báo Tin tức</p>
              <p className='footer_warning-text'>Cấm sao chép dưới mọi hình thức nếu không có sự chấp thuận bằng văn bản</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
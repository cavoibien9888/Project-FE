import React from 'react';
import '../../sass/styles.css';
import DateTime from '../SecondaryPage/DateTime';
// import NewsPage from './NewsPage';

import img1 from '../../testimg/img2.jpg';
import img2 from '../../testimg/img1.jpg';

function HomePage() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8'>
          <div className='blk1'>
            <div className='blk1_event-title'>
              <a href='/su-kien' className='blk1_event-text'> Sự kiện</a>
            </div>
            <div className='blk1_dateAndTime'>
              <DateTime/>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-8'>
          <div className="blk2">
            <div className="blk2_news-section">
              {/* {NewsPage.map((item) => (
                <div className='blk2_section'>
                  <div className="blk2_section-8">
                    <div className="blk2_section-img">
                      <img src={item.images} alt="ảnh bài báo" className='blk2-img'/>
                    </div>
                    <div className='blk2_section-title'>
                      <p className='blk2-title'>
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <hr className='blk2_vertical-line'/>
                </div>
              ))} */}
              <div className='blk2_section'>
                <div className='blk2_section-8'>
                <div className="blk2_section-img">
                  <img src={img1} alt="ảnh bài báo" className='blk2-img'/>
                </div>
                <div className='blk2_section-title'>
                  <p className='blk2-title'>
                    Kinh tế 6 tháng: Tăng trưởng song hành ổn định kinh tế vĩ mô
                  </p>
                </div>
                </div>
                <hr className='blk2_vertical-line'/>
                <div className='blk2_section-8'>
                <div className="blk2_section-img">
                  <img src={img1} alt="ảnh bài báo" className='blk2-img'/>
                </div>
                <div className='blk2_section-title'>
                  <p className='blk2-title'>
                    Kinh tế 6 tháng: Tăng trưởng song hành ổn định kinh tế vĩ mô
                  </p>
                </div>
                </div>
                <hr className='blk2_vertical-line'/>
                <div className='blk2_section-8'>
                  <div className="blk2_section-img">
                    <img src={img1} alt="ảnh bài báo" className='blk2-img'/>
                  </div>
                  <div className='blk2_section-title'>
                    <p className='blk2-title'>
                      Kinh tế 6 tháng: Tăng trưởng song hành ổn định kinh tế vĩ mô
                    </p>
                  </div>
                </div>
                
              </div>
              
              
            </div>
            <div className="blk2_latest-news">
              <div className='blk2_lN'>
                <img src={img2} alt="ảnh tin mới nhất" className='blk2_lN-img'/>
              </div>
              <div className="blk2_lN-description">
                <h1 className='blk2_lN-title'>Vẻ đẹp ruộng bậc thang Mù Cang Chải mùa nước đổ</h1>
                <p className='blk2_lN-content'>Cứ vào dịp tháng 5, tháng 6 hàng năm, khung cảnh ruộng đồng ở vùng cao Mù Cang Chải (Yên Bái) lại hiện lên như những bức tranh thủy mặc. Những thửa ruộng bậc thang ẩn hiện trong mây núi vào lúc bình minh hoặc hoàng hôn luôn rất đẹp mắt, nhất là khi người Mông ở đây ra đồng đưa nước vào ruộng và làm đất chuẩn bị cho một mùa vụ mới trong năm.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className='row'>
        <div className="col-8">
          <div id='home-media'>
            <div className="blk3">
              <div className="blk3_media">
                <div className='blk3_media-title'>
                  Media
                </div>
                <ul className="blk3_media-list">
                  <a href=""><li className="blk3_media-item">Tin tức TV</li></a>
                  <a href=""><li className="blk3_media-item">Video</li></a>
                  <a href=""><li className="blk3_media-item">Ảnh</li></a>
                  <a href=""><li className="blk3_media-item">Infographic</li></a>
                  <li className="blk3_media-item">Megastory</li>
                  <li className="blk3_media-item">Ảnh 360</li>
                  <li className="blk3_media-item">Talk show</li>
                  <li className="blk3_media-item">Podcart</li>
                </ul>
              </div>
              <div className='blk3_media-content'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
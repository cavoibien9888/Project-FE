import React from 'react';
import '../../sass/styles.css';
import DateTime from '../SecondaryPage/DateTime';

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
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
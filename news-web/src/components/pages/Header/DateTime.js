import React, { useState, useEffect } from 'react';
import '../../sass/styles.scss';

export const DateTime = () => {
    const [date, setDate] = useState(new Date());

    // Khởi tạo ngày và giờ
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatDate = (date) => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timeZone: 'Asia/Ho_Chi_Minh',
        };
        const weekday = date.toLocaleDateString('vi-VN', options);
        // Định dạng giờ VN
        return weekday;
    };

    return (
        <div className='date'>
            <p className='date_format-text'>
                {formatDate(date)}
            </p>
            <hr className='date_vertical-line'/>
            <p className='date_time-text'>
                {date.toLocaleString("vi-VN", {
                    hour: "numeric",
                    minute: "numeric",
                    second: "2-digit",
                    hour12: false,
                })}
            </p>
        </div>
    );
}

export default DateTime;

// import React, { useState, useEffect } from 'react';
// import '../../sass/styles.scss';

// export const DateTime = () => {
//     const [date, setDate] = useState(new Date());

//     // Khởi tạo ngày và giờ
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setDate(new Date());
//         }, 1000);

//         return () => clearInterval(intervalId);
//     }, []);

//     const formatDate = (date: Date): string => {
//         const options: Intl.DateTimeFormatOptions = {
//             weekday: 'long',
//             year: 'numeric',
//             month: 'numeric',
//             day: 'numeric',
//             timeZone: 'Asia/Ho_Chi_Minh',
//         };
//         const weekday = date.toLocaleDateString('vi-VN', options);
//         // Định dạng giờ VN
//         return weekday;
//     };

//     return (
//         <div className='date'>
//             <p className='date_format-text'>
//                 {formatDate(date)}
//             </p>
//             <hr className='date_vertical-line'/>
//             <p className='date_time-text'>
//                 {date.toLocaleString("vi-VN", {
//                     hour: "numeric",
//                     minute: "numeric",
//                     second: "2-digit",
//                     hour12: false,
//                 })}
//             </p>
//         </div>
//     );
// }

// export default DateTime;
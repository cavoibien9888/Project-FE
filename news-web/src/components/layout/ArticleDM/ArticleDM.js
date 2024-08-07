import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// files & pages
import '../../sass/articleDM.scss';
import { addHistory } from '../../store/Action';

const AarticleDm = ({ feed }) => {
    const { title, image, link, updated, description, cate } = feed;
    // const article = feed;
    const article = {
        ...feed,
        // id: id,
        id: Math.random().toString(36).substring(3, 12),
        isViewed: false,
    };
    // console.log(article);

    // get slug for detail article
    function getSlugFromLink(link) {
        const lastSlashIndex = link.lastIndexOf('/');
        const slug = cate+"/"+link.substring(lastSlashIndex + 1);
        return slug;
    }

    // const slugLink = getSlugFromLink(link);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // lich su xem
    const historyRedux = useSelector(state => state.root.history);
    function handelAddHistory(article) {
        article.isViewed = true;
        // Kiểm tra xem bài báo có cùng id đã tồn tại trong danh sách lịch sử chưa
        const existingArticle = historyRedux.find(item => item.title === article.title);
        // const existingArticle = historyRedux.find(item => item.id === article.id);
        if (!existingArticle) {
            dispatch(addHistory(article));
        }
    }

    const handleButtonClick = (link) => {
        handelAddHistory(article);

        const slug = `/${link}`;
        navigate(slug);
    };

    return (
        // <div>
        <div className="articleBlk" onClick={() => handleButtonClick(getSlugFromLink(link))}>
            {/* <a href={link}>
            </a> */}
            <img
                src={image}
                alt=""
                className='articleBlk-img'
            />
            {/* {cate} */}
            <p className='articleBlk-title'>{title}</p>
            <span className='date'>{updated}</span>
            {/* <button className='date' onClick={() => handleButtonClick(getSlugFromLink(link))}>Chi tiết</button> */}
            {/* <button className='date'>Chi tiết</button> */}
            {/* <div className='decription' dangerouslySetInnerHTML={{ __html: description }}></div> */}
            {/* <span className='description'>{description}</span> */}

        </div>

    );
};

export default AarticleDm;
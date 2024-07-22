import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addHistory } from '../../store/Action';
import '../../sass/article.scss';
import { format, parseISO } from 'date-fns';
import vi from 'date-fns/locale/vi';

const Article = ({ feed }) => {
    const { title, image, link, updated, pubDate, cate } = feed;

    const article = {
        ...feed,
        id: Math.random().toString(36).substring(2, 9),
        isViewed: false,
    };

    const getSlugFromLink = (link, cate) => {
        const lastSlashIndex = link.lastIndexOf('/');
        return `${cate}/${link.substring(lastSlashIndex + 1)}`;
    };

    const slug = getSlugFromLink(link, cate);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const historyRedux = useSelector(state => state.root.history);

    const handleAddHistory = (article) => {
        article.isViewed = true;
        const existingArticle = historyRedux.find(item => item.id === article.id);
        if (!existingArticle) {
            dispatch(addHistory(article));
        }
    };

    const handleButtonClick = () => {
        handleAddHistory(article);
        navigate(slug);
    };

    // Định dạng ngày giờ
    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                throw new Error('Invalid date');
            }
            return {
                date: format(date, 'dd/MM/yyyy', { locale: vi }),
                time: format(date, 'HH:mm', { locale: vi }),
            };
        } catch (error) {
            console.error('Error formatting date:', error);
            return {
                date: dateString,
                time: '', // Không có thời gian khi có lỗi
            };
        }
    };

    const { date: formattedPubDate, time: formattedPubTime } = formatDate(pubDate);
    const { date: formattedUpdatedDate, time: formattedUpdatedTime } = formatDate(updated);

    return (
        <div className="article" onClick={handleButtonClick}>
            <div className='article-blks'>
                <div className='article_blocks'>
                    <img
                        src={image}
                        alt="ảnh báo"
                        className='article_blocks-img'
                    />
                </div>
                <div className='article_text'>
                    <p className='article_title1'>{title}</p>
                    <div className='article_dateTime'>
                        <p className='article_date'>{formattedPubDate}</p>
                        {/* <p className='article_time'>{formattedPubTime}</p> */}
                    </div>
                </div>
                <span className='date'>{formattedUpdatedDate} {formattedUpdatedTime}</span>
            </div>
        </div>
    );
};

export default Article;

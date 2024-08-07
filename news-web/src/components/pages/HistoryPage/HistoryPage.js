import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// files & pages
import "../../sass/homePage.scss";
import ArticleHistory from '../../layout/Article/ArticleHistory';
// import Header from '../../pages/Header/Header';
// import Navigation from '../../layout/Navigation/Navigation';
import HeaderLayout from '../Header/HeaderLayout';

const HistoryPage = () => {
    // localStorage.clear();
    const listHistory = useSelector(state => state.root.history);
    console.log(listHistory);
    const dispatch = useDispatch();

    // function handelDelHistory(article) {
    //     article.isViewed = false;
    //     dispatch(deleteHistory(article));
    // }
    return (
        <Fragment>
            <HeaderLayout></HeaderLayout>
            <h1 className='caption'> Lịch sử xem</h1>

            <div className='list-history'>
                {listHistory.length > 0 ? (
                    // Hiển thị danh sách lịch sử xem
                    listHistory.map((article) => (
                        <div key={article.guid}>
                            <ArticleHistory feed={article}></ArticleHistory>
                            {/* <button className='date' onClick={() => handelDelHistory(article)}>xoa</button> */}
                            {/* Tạo một phần tử để render lịch sử khi click và chuyển trang */}
                        </div>
                    ))
                ) : (
                    // Hiển thị thông báo chưa có lịch sử xem
                    <div>Chưa có lịch sử xem.</div>
                )}
            </div>
        </Fragment>
    );
};

export default HistoryPage;
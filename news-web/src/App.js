import './App.scss';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './components/pages/DetailPage/DetailPage';
import HomePage from './components/pages/HomePage/HomePage';
import HistoryPage from './components/pages/HistoryPage/HistoryPage';
import Category from './components/pages/HomePage/Category';
import route from './components/data/route';

function App() {
    if (JSON.parse(localStorage.getItem("comment")) === null) {
        localStorage.setItem("comment", JSON.stringify([]));
    }
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage></HomePage>} />
                    <Route path="/history" element={<HistoryPage></HistoryPage>} />
                    <Route path="/:cate/:slug" element={<DetailPage></DetailPage>} />
                    {route.map((item, index) => (
                        <Fragment key={index}>
                            <Route path={item.link} element={<Category rssLink={item.rssLink} title={item.name} />} />
                                {item.dropdown && item.dropdown.map((subItem, subIndex) => (
                                <Route
                                    key = {subIndex}
                                    path = {subItem.link}
                                    element = {
                                        <Category
                                            rssLink = {subItem.rssLink}
                                            title={subItem.name} />
                                    }
                                />
                            ))}
                      </Fragment>
                    ))}
                </Routes>
            </BrowserRouter>
        </Fragment>
    );

}

export default App;
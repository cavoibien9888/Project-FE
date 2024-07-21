
import './App.scss';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './components/pages/DetailPage/DetailPage';
import HomePage from './components/pages/HomePage/HomePage';
import HistoryPage from './components/pages/HistoryPage/HistoryPage';
import DanhMuc from './components/pages/CategoryPage/CategoryPage';
import LinkRoute from './data/route';

function App() {
    if (JSON.parse(localStorage.getItem("comment")) === null) {
        localStorage.setItem("comment", JSON.stringify([]));
    }
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <HomePage/> } />
                    <Route path="/history" element={ <HistoryPage/> } />
                    <Route path="/:cate/:slug" element={ <DetailPage/> } />

                    {LinkRoute.map((item, index) => (
                      <Fragment key={index}>
                          <Route path={item.link} element={<DanhMuc rssLink={item.rssLink} title={item.name} />} />
                          {item.dropdown && item.dropdown.map((subItem, subIndex) => (
                            <Route key={subIndex} path={subItem.link} element={<DanhMuc rssLink={subItem.rssLink} title={subItem.name} />} />
                          ))}
                      </Fragment>
                    ))}
                </Routes>
            </BrowserRouter>
        </Fragment>
    );

}

export default App;
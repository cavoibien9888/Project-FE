
import './App.scss';
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./page/DetailPage";
import HomePage from './page/home/HomePage';
import HistoryPage from './page/HistoryPage';
import DanhMuc from './page/DanhMuc';
import route from './data/route';

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
                    {/*<Route path="/chitiet" element={<DetailPage></DetailPage>} />*/}
                    {/*<Route path="/danhmuc" element={<DanhMuc></DanhMuc>} />*/}

                    {route.map((item, index) => (
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
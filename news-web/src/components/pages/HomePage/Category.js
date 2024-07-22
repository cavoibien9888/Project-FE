import React, { useEffect, useState } from 'react';

// files & pages
// import '../../sass/detailPage.scss';
import '../../sass/category.scss'
import { fetchRssFeed } from '../../utils/RssFeed';
import Header from '../Header/Header';
import Navigation from '../../layout/Navigation/Navigation';
import ArticleDM from '../../layout/ArticleDM/ArticleDM';
import FormSearch from '../../pages/Header/FormSearch';
import Footer from '../Footer/Footer';

const Category = ({ rssLink, title }) => {
    console.log(rssLink)
    const [dataArticle, setDataArticle] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const dataArticle = await fetchRssFeed(rssLink);
                setDataArticle(dataArticle);
                setFilteredData(dataArticle);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData()
    }, [rssLink]);


    // const handleSearch = (searchTerm) => {
    //     const filtered = dataArticle.filter((item) => {
    //         // Xử lý logic tìm kiếm tại đây
    //         // Ví dụ: so sánh tiêu đề hoặc mô tả với searchTerm
    //         const title = item.title.toLowerCase();
    //         // const description = item.description.toLowerCase();
    //         const searchTermLower = searchTerm.toLowerCase();
    //         return title.includes(searchTermLower);
    //     });
    //     setFilteredData(filtered);
    // };

    return (
        <div id='categoryBlk'>
            <Header/>
            <div id='categoryBlk_content'>
                {/* <Navigation></Navigation> */}
                <p id="categoryBlk-text" >{title}</p>
                {/* <FormSearch onSearch={handleSearch} /> */}

                <div id='articleDM-block'>
                    <div className="articleDM">
                        {filteredData.map((item, index) => (
                            <div key={index} className='articleDM-item'>
                                <ArticleDM feed={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Category;
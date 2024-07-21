import React, { useEffect, useState } from 'react';

// files & pages
import '../../sass/detailPage.scss';
import { fetchRssFeed } from '../../utils/RssFeed';
import Header from '../Header/Header';
import Navigation from '../../layout/Navigation/Navigation';
import ArticleDM from '../../layout/ArticleDM/ArticleDM';
import FormSearch from '../../pages/Header/FormSearch';

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


    const handleSearch = (searchTerm) => {
        const filtered = dataArticle.filter((item) => {
            // Xử lý logic tìm kiếm tại đây
            // Ví dụ: so sánh tiêu đề hoặc mô tả với searchTerm
            const title = item.title.toLowerCase();
            // const description = item.description.toLowerCase();
            const searchTermLower = searchTerm.toLowerCase();
            return title.includes(searchTermLower);
        });
        setFilteredData(filtered);
    };

    return (
        <div>
            <Header></Header>
            <Navigation></Navigation>
            <h3 className="tieude" >{title}</h3>
            <FormSearch onSearch={handleSearch} />

            <div className="articleDM">
                {filteredData.map((item, index) => (
                    <div key={index}>
                        <ArticleDM feed={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
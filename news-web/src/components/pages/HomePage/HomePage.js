import React, { useEffect, useState } from "react";

// Importing styles and components
import '../../sass/homePage.scss';
import Header from '../Header/Header';
import { fetchRssFeed } from '../../utils/RssFeed';
import Article from '../../layout/Article/Article';
import ArticleTitle from '../../layout/Article/ArticleTitle';
import Footer from "../Footer/Footer";

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [dataArticle, setDataArticle] = useState([]);

    // Fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchRssFeed('https://baotintuc.vn/tin-moi-nhat.rss');
                setDataArticle(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);

    // Split data into two sections
    const firstSection = dataArticle.slice(0, 6);
    const secondSection = dataArticle.slice(6, 9);

    // Handle search functionality
    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);

        if (searchTerm.trim() === "") {
            setSearchResults([]);
        } else {
            const filtered = dataArticle.filter((item) => {
                const title = item.title.toLowerCase();
                const searchTermLower = searchTerm.toLowerCase();
                return title.includes(searchTermLower);
            });
            setSearchResults(filtered);
        }
    };

    return (
        <div className="home">
            <Header onSearch={handleSearch} />
            <div className="layout">
                <section className="list-home first">
                    {searchTerm.trim() === "" ? (
                        <div className="article_list">
                            {firstSection.map((item, index) => (
                                <div key={item.id || index} className="article-blk">
                                    <Article feed={item} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="article_results-se">
                            <p className="article_list-search">Kết quả tìm kiếm</p>
                            <div className="article_list">
                                {searchResults.map((item, index) => (
                                    <div key={item.id || index} className="article-blk">
                                        <Article feed={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>
                {/* Ẩn article-right khi có kết quả tìm kiếm */}
                {searchTerm.trim() === "" && (
                    <section className="article-right">
                        <div className="article_blk">
                            {secondSection.map((item, index) => (
                                <div key={item.id || index} className="article_blk-art">
                                    <ArticleTitle feed={item} />
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;

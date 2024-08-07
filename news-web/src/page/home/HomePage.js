import React, { useEffect, useState } from 'react';
import './home.scss';
import { fetchRssFeed } from '../../util/RssFeed';
import Article from '../../components/article/Article';
import HeaderLayout from '../../layout/HeaderLayout';
import ArticleTitle from '../../components/article/ArticleTitle';
import FormSearch from '../../components/FormSearch';
import Footer from '../../layout/footer/Footer';


const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [dataArticle, setDataArticle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataArticle = await fetchRssFeed('https://baotintuc.vn/tin-moi-nhat.rss');
        setDataArticle(dataArticle);

      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  // Chia dữ liệu thành 2 phần
  const firstSection = dataArticle.slice(0, 6);
  const secondSection = dataArticle.slice(6, 9);
  console.log(firstSection);
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);

    if (searchTerm.trim() === '') {
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
      <HeaderLayout></HeaderLayout>
      <h3 className="caption">Trang chủ</h3>
      <FormSearch onSearch={handleSearch} />
      <div className="layout">
        <section className="list-home first">
          {searchTerm.trim() === '' ? (

            <>
              {firstSection.map((item, index) => (
                <div key={index}>
                  <Article feed={item}></Article>
                </div>
              ))}
            </>
          ) : (

            searchResults.map((item, index) => (
              <div key={index}>
                <Article feed={item}></Article>
              </div>
            ))
          )}
        </section>
        <section className="article-right">
          {
            secondSection.map((item, index) => (
              <div key={index}>
                <ArticleTitle feed={item}></ArticleTitle>
              </div>
            ))
          }
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
import React, { useEffect, useState } from 'react';
import { fetchNewsContent } from './service/NewService';
import { NewsContent } from './type/NewType';
import { categoryName } from './define/Category';

const NewsComponent: React.FC = () => {
    const [newsContent, setNewsContent] = useState<NewsContent | null>(null);
    const url = 'https://baotintuc.vn/chinh-tri/quy-dinh-144qdtw-ngan-chan-tinh-trang-so-trach-nhiem-trong-can-bo-dang-vien-20240719070833606.htm';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchNewsContent(url);
                setNewsContent(data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, [url]);

    if (!newsContent) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{newsContent.title}</h1>
            <p><strong>Author:</strong> {newsContent.author}</p>
            <p><strong>Publish Date:</strong> {newsContent.publishDate.toDateString()}</p>
            <p><strong>Category:</strong> {categoryName[newsContent.category]}</p>
            {newsContent.thumbnail && <img src={newsContent.thumbnail} alt="Thumbnail" />}
            {newsContent.paragraphs.map((paragraph, index) => (
                <div key={index}>
                    {paragraph.image && (
                        <figure>
                            <img src={paragraph.image.link} alt={paragraph.image.capture} />
                            <figcaption>{paragraph.image.capture}</figcaption>
                        </figure>
                    )}
                    <p>{paragraph.text}</p>
                </div>
            ))}
        </div>
    );
};

export default NewsComponent;
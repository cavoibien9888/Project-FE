import { Category } from '../define/Category';
import { News, NewsContent, Paragraph } from '../type/NewType';
import newContent from '../data/NewContent';

import parserRSS from './parseRss';
import axios from 'axios';
import cheerio from 'cheerio';


const getNewsById = (id: string): NewsContent | undefined => {
    return newContent.find((news) => news.id == id);
};

const getNewsByCategory = (category: Category): Promise<News[]> => {
    return parserRSS(category).then((res) => {
        const rawNews = res.rss.channel.item;
        return convertToNews(rawNews);
    });
};

const getId = (longId: string) => {
    const lastHyphenIndex = longId.lastIndexOf('-');

    const extensionIndex = longId.lastIndexOf('.htm');

    return longId.substring(lastHyphenIndex + 1, extensionIndex);
};
const domParser = new DOMParser();
const convertToNews = (rawNews: any): News[] => {
    return rawNews.map((item: any) => {
        const doc = domParser.parseFromString(
            item.description['_cdata'],
            'text/html',
        );
        const link = item.link['_cdata'];
        const thumbnail = doc.body.querySelector('img')?.getAttribute('src') ?? '';
        const description = doc.body.textContent?.trim() ?? '';
        const title = item.title['_cdata'];
        const id = getId(link);
        const publishDate = new Date(item.pubDate['_text']);
        return {
            id,
            title,
            link,
            description,
            publishDate,
            thumbnail,
        };
    });
};

const getNewsDetail = (news: News): NewsContent | undefined => {
    const id = news.id.substring(news.id.length - 1, news.id.length);
    return newContent.find((item: NewsContent) => item.id == id);
};

const getNewsListByIds = (ids: string[]): NewsContent[] => {
    return newContent.filter(news => ids.includes(news.id));
};
const fetchNewsContent = async (url: string): Promise<NewsContent> => {
    try {
        const { data } = await axios.get(`http://localhost:5000/proxy?url=${encodeURIComponent(url)}`);
        const $ = cheerio.load(data);

        const title = $('h1.detail-title').text();
        const author = $('div.author strong').text();
        const publishDateText = $('div.date span.txt').text();
        const publishDate = new Date(publishDateText);
        const categoryText = $('h4.cate a').attr('href')?.split('-')[0] || 'home';
        const category = Object.values(Category).includes(categoryText as Category) ? categoryText as Category : Category.HOME;
        const thumbnail = $('figure.image img').first().attr('src') || '';

        const contentElements = $('div.contents p, div.contents figure');
        const paragraphs: Paragraph[] = [];

        contentElements.each((_, element) => {
            if ($(element).is('p')) {
                paragraphs.push({ text: $(element).text() });
            } else if ($(element).is('figure')) {
                const imgUrl = $(element).find('img').attr('src') || '';
                const caption = $(element).find('figcaption').text();
                paragraphs.push({ image: { link: imgUrl, capture: caption }, text: '' });
            }
        });

        const id = url.substring(url.lastIndexOf('/') + 1);

        return {
            id,
            title,
            author,
            publishDate,
            thumbnail,
            paragraphs,
            category
        };

    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
};
export { getNewsByCategory, getNewsDetail, getNewsById, getNewsListByIds, fetchNewsContent };

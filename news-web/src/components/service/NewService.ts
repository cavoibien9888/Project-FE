import { Category } from '../define/Category';
import { News, NewsContent } from '../type/NewType';
import newContent from '../data/NewContent';

import parserRSS from './parseRss';


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

export { getNewsByCategory, getNewsDetail, getNewsById, getNewsListByIds };

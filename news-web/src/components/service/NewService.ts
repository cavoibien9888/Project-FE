import {News, NewsContent} from "../type/NewType";
import newContent from "../data/NewContent";
import {Category} from "../define/Category";
import parserRSS from "./RssService";

const getNewsById = (id: string): NewsContent | undefined => {
    return newContent.find((news) => news.id == id);
};
const getNewsByCategory = (category: Category): Promise<News[]> => {
    return parserRSS(category).then((res) => {
        const rawNews = res.rss.channel.item;
        return convertToNews(rawNews);
    });
};

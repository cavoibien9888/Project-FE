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

// Hàm trích xuất URL của hình ảnh từ CDATA
const extractThumbnail = (description: string): string => {
    const regex = /<img[^>]+src="([^">]+)"/;
    const match = description.match(regex);
    return match ? match[1] : '';
};
const getId = (link: string) => {
    const indexStart = link.lastIndexOf("-");
    const indexEnd = link.lastIndexOf(".htm");
    return link.substring(indexStart+1, indexEnd);
}
const convertToNews = (rawNews: any[]): News[] => {
    return rawNews.map((item: any) => ({
        id: getId(item.guid._cdata || item.guid._text),
        title: item.title._cdata || item.title._text,
        link: item.link._cdata || item.link._text,
        description: item.description._cdata || item.description._text,
        pubDate: new Date(item.pubDate._cdata || item.pubDate._text),
        thumbnail: extractThumbnail(item.description._cdata || item.description._text)
    }));
};
export {getNewsByCategory,getNewsById};

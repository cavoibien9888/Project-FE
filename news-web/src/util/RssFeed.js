import { useEffect, useState } from 'react';

import axios from 'axios';

const fetchRssFeed = async (url) => {
    try {
        const response = await axios.get(`http://localhost:5000/proxy?url=${encodeURIComponent(url)}`);
        const data = response.data;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');

        const parsedItems = Array.from(items).map((item) => {
            const title = item.querySelector('title').textContent;
            const link = item.querySelector('link').textContent;
            const guid = item.querySelector('guid').textContent;
            const description = item.querySelector('description').textContent;
            const pubDate = item.querySelector('pubDate').textContent;

            const imgTagMatch = description.match(/<img src='([^']+)'/);
            const image = imgTagMatch ? imgTagMatch[1] : '';

            const cate = link.split('/')[3] || '';

            return {
                title,
                link,
                guid,
                description,
                pubDate,
                cate,
                image,
            };
        });

        return parsedItems;
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
        return [];
    }
};

const getRssFeedDetail = async (url, callback) => {
    try {
        const response = await axios.get(url);
        const html = response.data;

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const title = doc.querySelector('h1.detail-title').textContent.trim();
        const sapo = doc.querySelector('h2.sapo').textContent.trim();
        const body = doc.querySelector('div.boxdetail')?.innerHTML ?? '';
        const bodys = doc.querySelector('div.boxdetail')?.textContent ?? '';
        const tag = doc.querySelector('div.article__tag')?.innerHTML ?? '';

        const imgElements = doc.querySelectorAll('img');
        imgElements.forEach((img) => {
            const src = img.getAttribute('src');
            const dataSrc = img.getAttribute('data-src');
            if (dataSrc) {
                img.setAttribute('src', dataSrc);
                img.removeAttribute('data-src');
            }
            console.log('Src:', src);
            console.log('data-src:', dataSrc);
        });

        const more = doc.querySelector('div.recommend-news')?.textContent ?? '';
        callback({ title, sapo, body, bodys, tag, more });

    } catch (error) {
        console.log('Lỗi: ' + error);
    }
};

export { fetchRssFeed, getRssFeedDetail };

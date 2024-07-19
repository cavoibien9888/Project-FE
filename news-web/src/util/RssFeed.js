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
            return {
                title: item.querySelector('title').textContent.trim(),
                description: item.querySelector('description').textContent.trim(),
                link: item.querySelector('link').textContent.trim(),
                pubDate: item.querySelector('pubDate').textContent.trim(),
                guid: item.querySelector('guid').textContent.trim(),
            };
            console.log(item.querySelector('title').textContent.trim());
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
        const title = doc.querySelector('title').innerText;
        const sapo = doc.querySelector('div.article__sapo')?.textContent ?? '';
        const body = doc.querySelector('div.article__body')?.innerHTML ?? '';
        const bodys = doc.querySelector('div.article__body')?.textContent ?? '';
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

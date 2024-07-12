import React from 'react';
import {Category} from '../define/Category';
export interface News{
    id: string;
    title: string | undefined;
    link: string | undefined;
    description: string | undefined;
    pubDate: Date;
    thumbnail: string | undefined;
}
export interface NewsContent {
    id: string;
    title: string;
    author: string;
    publishDate: string;
    thumbnail: string;
    paragraphs: Paragraph[];
    category: Category;
}
export interface Paragraph {
    image?: Image;
    text: string;
}

export interface Image {
    capture: string;
    link: string;
}

export interface NewsLoading {
    news?: News;
    isLoading: boolean;
    cssImage?: React.CSSProperties;
}
export interface NewsItem {
    id: number;
    title: string;
    content: string;
}
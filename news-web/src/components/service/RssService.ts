import {Category} from "../define/Category";
import xmljs from 'xml-js';
import instance from "./request";

const parserRSS = async (category: Category) => {
    return instance
        .get('/', {
            params: {
                category: category,
            },
        })
        .then((xml) => {
            const json = xmljs.xml2json(xml.data, { compact: true, spaces: 4 });
            return JSON.parse(json);
        })
        .catch((error) => {
            if (error.response.status == 500) return;
            if (error.response.status == 400) return;
        });
};
export default parserRSS;
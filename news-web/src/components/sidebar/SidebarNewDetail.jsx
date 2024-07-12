import {Category} from "../define/Category";
import {useEffect, useState} from "react";
import {useMediaQuery} from "@mui/material";
import {Theme} from "@mui/material";

function SidebarNewDetail({ category }:{ category:Category }) {
    const style = {
        position: 'sticky',
        left: 0,
        top: '50px',
        paddingTop: '50px',
    };
    const [newsRelated, setNewsRelated] = useState<News[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const isMobile = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm'),
    );
    useEffect(() => {
        getNewsByCategory(category).then((news) => {
            const newsRemoveDescription = news
                .map((item) => {
                    return { ...item, description: '' };
                })
                .slice(0, 3);
            setNewsRelated(newsRemoveDescription);
            setLoading(false);
        });
    }, []);
}
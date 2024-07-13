import {Category} from "../define/Category";
import {useEffect, useState} from "react";
import {Box, useMediaQuery} from "@mui/material";
import {Theme} from "@mui/material";
import {getNewsByCategory} from "../service/NewService";
import {News} from "../type/NewType";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CardHorizontal from "../card/CardHorizontal";

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
    return (
        <Box sx={style}>
            <Typography gutterBottom variant={'h3'}>
                Các bài báo liên quan
            </Typography>
            <Stack sx={{ position: 'static' }} spacing={3}>
                {newsRelated.slice(0, 3).map((news) => (
                    <CardHorizontal
                        isLoading={loading}
                        news={news}
                        key={Math.random()}
                        cssImage={{ flex: 1 }}
                    />
                ))}
            </Stack>
        </Box>
    );
}
export default SidebarNewDetail;
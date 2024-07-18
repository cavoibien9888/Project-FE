import React, { useState, useEffect } from 'react';
import { Navigate, NavLink, useParams } from 'react-router-dom';
import {
    Box,
    Breadcrumbs,
    CardMedia,
    Container,
    Grid,
    Link,
    // Theme,
    // useMediaQuery,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {getNewsById} from "../service/NewService";
import SidebarNewDetail from "../sidebar/SidebarNewDetail";
import {Image, Paragraph} from "../type/NewType";
import {toCategoryName} from "../service/CateGoryService";
import {formatDate} from "../service/TimeService";

function NewDetail() {
    // const isMobile = useMediaQuery((theme: Theme) =>
    //     theme.breakpoints.down('sm'),
    // );
    const { id } = useParams();
    if (!id) {
        return <Navigate to={'/404'} />;
    }
    const getLastNum = 'A' + id.substring(id.length - 1, id.length);

    const detail = getNewsById(getLastNum);

    useEffect(() => {
        document.title = detail?.title || '';
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!detail) {
        return <Navigate to={'/404'} />;
    }


    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleShowImage = () => {
        setIsOpen(true);
    };

    const images = detail.paragraphs
        .filter((para: Paragraph) => para.image?.link)
        .map((para: Paragraph) => {
            return {
                src: para.image?.link,
                alt: para.image?.capture,
            };
        });

    return (
        <Container>
            <Grid
                // sx={{ position: isMobile ? 'relative' : 'static' }}
                container
                spacing={3}
            >
                <Grid item md={7} xs={12}>
                    <Stack
                        sx={{ py: 3 }}
                        // gap={isMobile ? 1 : 2}
                        direction={'row'}
                        justifyContent={'space-between'}
                        // alignItems={isMobile ? 'flex-start' : 'center'}
                    >
                        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                            <Link component={NavLink} to={'/'} underline="hover">
                                <Typography variant={'subtitle1'}> Trang chủ</Typography>
                            </Link>
                            <Link component={NavLink} to={'/'} underline="hover">
                                <Typography variant={'subtitle1'}>
                                    {toCategoryName(detail.category)}
                                </Typography>
                            </Link>
                        </Breadcrumbs>
                        <Typography variant={'subtitle1'}>
                            {formatDate(detail.publishDate)}
                        </Typography>
                    </Stack>

                    <Box sx={{ display: 'none' }}>
                        <SlideshowLightbox
                            images={images}
                            open={isOpen}
                            onClose={() => setIsOpen(false)}
                            fullScreen={true}
                            showThumbnails={false}
                            theme={'lightbox'}
                            animateThumbnails={true}
                        />
                    </Box>
                    {/*<Typography gutterBottom component={'h1'} variant={isMobile ? 'h3' : 'h2'}>*/}
                    {/*    {detail.title}*/}
                    {/*</Typography>*/}
                    <Typography gutterBottom align={'right'} variant={'subtitle1'}>
                        {`Tác giả ${detail.author}`}
                    </Typography>

                    <CardMedia component={'img'} sx={{ maxHeight: '100%', width: '100%', pb: 3, pt: 1 }}
                               src={detail.thumbnail}
                               alt="" />

                    {detail.paragraphs.map((para, index) => (
                        <NewParagraph
                            key={index}
                            paragraph={para}
                            showImage={handleShowImage}
                        />
                    ))}
                </Grid>
                <Grid item md={4} xs={12}>
                    <SidebarNewDetail category={detail.category} />
                </Grid>
            </Grid>
        </Container>
    );
}

function NewsImage({
                       image,
                       showImage,
                   }: {
    image: Image | undefined;
    showImage: () => void;
}) {
    if (typeof image == 'undefined') return <div></div>;

    return (
        <Box>
            <CardMedia component={'img'} image={image.link} onClick={showImage} />
            <Typography
                variant={'body2'}
                gutterBottom
                paragraph={true}
                align={'center'}
            >
                {image.capture}
            </Typography>
        </Box>
    );
}

function NewParagraph({
                          paragraph,
                          showImage,
                      }: {
    paragraph: Paragraph;
    showImage: () => void;
}) {
    return (
        <>
            <Typography gutterBottom variant={'body1'} align={'justify'}>
                {paragraph.text}
            </Typography>
            <NewsImage
                key={Math.random()}
                image={paragraph.image}
                showImage={showImage}
            />
        </>
    );
}

export default NewDetail;
// import React from 'react'
//
// function NewDetail() {
//   return (
//     <div>NewDetail</div>
//   )
// }
//
// export default NewDetail;

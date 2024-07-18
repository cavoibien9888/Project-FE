import {NewsLoading} from "../type/NewType";
import {NavLink} from "react-router-dom";
import {Box, Card, CardActionArea, CardContent, CardMedia, Skeleton} from "@mui/material";
import Stack from "@mui/material/Stack";
import {timeAgo} from "../service/TimeService";
import ClampedTypography from "../Typography/ClampedTypography";

function CardHorizontal({ news, isLoading = false }: NewsLoading) {
    return (
        <Box
            component={NavLink}
            to={isLoading ? `/detail/` : ''}
            sx={{ textDecoration: 'none' }}
        >
            <Card>
                <Stack direction="row" alignItems="stretch">
                    <Box sx={{ flex: 1 }}>
                        {isLoading ? (
                            <Skeleton variant="rectangular" width="100%" height={118} />
                        ) : (
                            <CardMedia
                                component="img"
                                height="100%"
                                image={news?.thumbnail}
                                alt={news?.thumbnail}
                            />
                        )}
                    </Box>
                    <CardActionArea sx={{ flex: 1 }}>
                        <CardContent>
                            {isLoading ? (
                                <Skeleton width="100%" />
                            ) : (
                                <ClampedTypography lineClamp={4} variant="body1" component="p">
                                    {news?.title}
                                </ClampedTypography>
                            )}
                            {isLoading ? (
                                <Skeleton width="100%" />
                            ) : (
                                <ClampedTypography lineClamp={3} variant="body2">
                                    {news?.description}
                                </ClampedTypography>
                            )}
                        </CardContent>
                    </CardActionArea>
                </Stack>
            </Card>
        </Box>
    );
}

export default CardHorizontal;
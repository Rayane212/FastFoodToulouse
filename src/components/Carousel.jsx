import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import restaurantData from '../data/restaurantData.json';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Carousel = () => {
    const sliderRef = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20%',
        nextArrow: <ArrowForwardIosIcon style={{ fontSize: 50, color: '#333', zIndex: 1 }} />,
        prevArrow: <ArrowBackIosIcon style={{ fontSize: 50, color: '#333', zIndex: 1 }} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    const handleBooking = (restaurant) => {
        console.log(`Vous avez réservé une table chez ${restaurant.name}`);
    };

    return (
        <Box sx={{ p: 2, background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
            <Slider ref={sliderRef} {...settings}>
                {restaurantData.map((restaurant) => (
                    <Box key={restaurant.id} sx={{ padding: '10px', margin: '0 10px' }}>
                        <Card sx={{ borderRadius: '16px', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s ease-in-out' } }}>
                            <CardMedia
                                component="img"
                                image={restaurant.image}
                                alt={restaurant.name}
                                sx={{ height: 150, borderTopLeftRadius: '16px', borderTopRightRadius: '16px', objectFit: 'cover', filter: 'brightness(0.8)' }}
                            />
                            <CardContent sx={{ textAlign: 'center', backgroundColor: '#f9f9f9' }}>
                                <Typography variant="h6" gutterBottom style={{ color: '#333333', fontWeight: 'bold' }}>{restaurant.name}</Typography>
                                <Typography variant="body2" color="textSecondary" style={{ color: '#666666' }}>{restaurant.description}</Typography>
                                <Button onClick={() => handleBooking(restaurant)} variant="contained" sx={{ mt: 2, backgroundColor: '#ff3366', color: 'white', '&:hover': { backgroundColor: '#cc0044' } }}>Réserver</Button>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default Carousel;

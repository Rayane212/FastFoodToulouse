import React from 'react';
import { useParams } from 'react-router-dom';
import restaurantData from '../data/restaurantData.json';
import Map from '../components/Map';
import { Box, Typography, Paper, Card, CardMedia, CardContent } from '@mui/material';

const RestaurantPage = () => {
    const { id } = useParams();
    const restaurant = restaurantData.find(r => r.id.toString() === id);

    if (!restaurant) {
        return <Typography variant="h6" color="error">Restaurant introuvable</Typography>;
    }

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" component="h2">{restaurant.name}</Typography>
            <Card>
                <CardMedia
                    component="img"
                    image={restaurant.image}
                    alt={restaurant.name}
                    sx={{ width: "100%", height: "auto" }}
                />
                <CardContent>
                    <Typography variant="body1"><strong>Adresse:</strong> {restaurant.address}</Typography>
                    <Typography variant="body1"><strong>Spécialités:</strong> {restaurant.specialties.join(', ')}</Typography>
                    <Typography variant="body1"><strong>Origine:</strong> {restaurant.origins.join(', ')}</Typography>
                    <Typography variant="body1"><strong>Description:</strong> {restaurant.description}</Typography>
                </CardContent>
            </Card>
            <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
                <Map position={[restaurant.position.latitude, restaurant.position.longitude]} />
            </Paper>
        </Box>
    );
};

export default RestaurantPage;

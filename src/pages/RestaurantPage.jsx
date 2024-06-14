import React from 'react';
import { useParams } from 'react-router-dom';
import { useToggle } from '../context/ToggleContext';
import Map from '../components/Map';
import { Box, Typography, Paper, Card, CardMedia, CardContent, Container, Rating } from '@mui/material';

const RestaurantPage = () => {
    const { restaurants } = useToggle();
    const { id } = useParams();
    const restaurant = restaurants.find(r => r.id.toString() === id);

    if (!restaurant) {
        return <Typography variant="h6" color="error">Restaurant introuvable</Typography>;
    }

    return (
        <Container style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowY: 'hidden' }}>
            <Box sx={{ p: 2 }}>
                <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 2 }}>
                    {restaurant.name}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexGrow: 1 }}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <CardMedia
                            component="img"
                            sx={{ height: { xs: 'auto', md: 300 }, width: '100%', objectFit: 'cover' }}
                            image={restaurant.image}
                            alt={restaurant.name}
                        />
                    </Card>
                    <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h6" component="h3" sx={{ mb: 2 }}>Informations</Typography>
                        <Rating
                            label="Note"
                            name="rating"
                            value={restaurant.rating}
                            readOnly
                            sx={{ mb: 1 }}
                        />
                        <Typography variant="body1"  sx={{ mb: 1 }}><strong>Adresse:</strong> {restaurant.address}</Typography>
                        <Typography variant="body1"  sx={{ mb: 1 }}><strong>Spécialités:</strong> {restaurant.specialties.join(', ')}</Typography>
                        <Typography variant="body1"  sx={{ mb: 1 }}><strong>Origine:</strong> {restaurant.origins.join(', ')}</Typography>
                        <Typography variant="body1"  sx={{ mb: 1 }}><strong>Description:</strong> {restaurant.description}</Typography>
                    </CardContent>
                </Box>
                <Box sx={{ flexShrink: 0, mt: 2 }}>
                    <Paper elevation={3} sx={{ height: '400px' }}>
                        <Map position={[restaurant.position.latitude, restaurant.position.longitude]} />
                    </Paper>
                </Box>
            </Box>
        </Container>


    );
}

export default RestaurantPage;

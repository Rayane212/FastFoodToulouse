import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid, Rating, Box } from '@mui/material';
import { useToggle } from '../context/ToggleContext';

const FormPage = () => {
    const { restaurants, addRestaurant } = useToggle();
    const [restaurant, setRestaurant] = useState({
        id: restaurants.length + 1,
        name: '',
        address: '',
        specialties: '',
        origins: '',
        rating: 0,
        position: { latitude: 43.6044622, longitude: 1.4442469 },
        image: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'latitude' || name === 'longitude') {
            setRestaurant({
                ...restaurant,
                position: {
                    ...restaurant.position,
                    [name]: parseFloat(value),
                },
            });
        } else {
            setRestaurant({ ...restaurant, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRestaurant = { ...restaurant, id: restaurants.length + 1, specialties: restaurant.specialties.split(','), origins: restaurant.origins.split(',') };
        addRestaurant(newRestaurant);
        setRestaurant({
            id: restaurants.length + 1,
            name: '',
            address: '',
            specialties: '',
            origins: '',
            rating: 0,
            position: { latitude: 0, longitude: 0 },
            image: '',
            description: '',
        });
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>Ajouter un Restaurant</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Nom"
                            name="name"
                            value={restaurant.name}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Adresse"
                            name="address"
                            value={restaurant.address}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Spécialités (séparées par des virgules)"
                            name="specialties"
                            value={restaurant.specialties}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Origines (séparées par des virgules)"
                            name="origins"
                            value={restaurant.origins}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="center">
                            <Rating

                                label="Note"
                                name="rating"
                                number={restaurant.rating}
                                onChange={handleChange}
                                required

                            />
                        </Box>

                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Latitude"
                            name="latitude"
                            type="number"
                            value={restaurant.position.latitude}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Longitude"
                            name="longitude"
                            type="number"
                            value={restaurant.position.longitude}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="URL de l'image"
                            name="image"
                            value={restaurant.image}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            name="description"
                            value={restaurant.description}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Ajouter
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default FormPage;

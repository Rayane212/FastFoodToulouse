import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';
import restaurantData from '../data/restaurantData.json';
import { useToggle } from '../context/ToggleContext';



const FormPage = () => {
    const { checked } = useToggle();
    
    if (!checked) {
        return <div>Accès refusé</div>;
    }

    const [restaurants, setRestaurants] = useState(restaurantData);
    const [restaurant, setRestaurant] = useState({
        id: restaurantData.length + 1,
        name: '',
        address: '',
        specialties: '',
        origins: '',
        rating: '',
        latitude: '',
        longitude: '',
        image: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRestaurant({ ...restaurant, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRestaurants([...restaurants, { ...restaurant, id: restaurants.length + 1 }]);
        setRestaurant({
            id: restaurants.length + 1,
            name: '',
            address: '',
            specialties: '',
            origins: '',
            rating: '',
            latitude: '',
            longitude: '',
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
                        <TextField
                            fullWidth
                            label="Note"
                            name="rating"
                            type="number"
                            value={restaurant.rating}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Latitude"
                            name="latitude"
                            type="number"
                            value={restaurant.latitude}
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
                            value={restaurant.longitude}
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

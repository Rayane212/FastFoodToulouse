import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RestaurantList = ({ restaurants }) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/address/${id}`);
    };

    return (
        <>
            {restaurants.map((restaurant, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card onClick={() => handleClick(restaurant.id)} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={restaurant.image + `?random=${restaurant.id}`}
                            alt={restaurant.name}
                        />
                        <CardContent style={{ flexGrow: 1 }}>
                            <Typography variant="h5" component="div">
                                {restaurant.name}
                            </Typography>
                            <Typography color="text.secondary" variant="subtitle1">
                                {restaurant.address}
                            </Typography>
                            <Typography variant="body2">
                                Spécialités : {restaurant.specialties.map(specialty => specialty).join(', ')}
                            </Typography>
                            <Typography variant="body2">
                                Origines : {restaurant.origins.map(origin => origin).join(', ')}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </>
    );
};

RestaurantList.propTypes = {
    restaurants: PropTypes.array.isRequired,
};

export default RestaurantList;

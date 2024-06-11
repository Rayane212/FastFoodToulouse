import React, { useState, useEffect, useRef } from 'react';
import Filter from '../components/Filter';
import restaurantData from '../data/restaurantData.json';
import { Grid, Container, Box, Pagination } from '@mui/material';
import RestaurantList from '../components/RestaurantList';

const ITEMS_PER_PAGE = 8;

const HomePage = () => {
    const [restaurants, setRestaurants] = useState(restaurantData);
    const [page, setPage] = useState(1);
    const [isScrollable, setIsScrollable] = useState(false);
    const contentRef = useRef(null);

    const handleFilterChange = (filters) => {
        let filteredRestaurants = restaurantData;

        if (filters.specialty) {
            filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.specialties.includes(filters.specialty));
        }
        if (filters.origin) {
            filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.origins.includes(filters.origin));
        }

        setRestaurants(filteredRestaurants);
        setPage(1);
    };

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const paginatedRestaurants = restaurants.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    useEffect(() => {
        if (contentRef.current) {
            const contentHeight = contentRef.current.clientHeight;
            const windowHeight = window.innerHeight;
            setIsScrollable(contentHeight > windowHeight);
        }
    }, [paginatedRestaurants]);

    return (
        <Container style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowY: isScrollable ? 'auto' : 'hidden' }}>
            <Box mt={4} mb={4} display="flex" flexDirection="column" alignItems="center" flexGrow={1} ref={contentRef}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                        <Filter onFilterChange={handleFilterChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                           <RestaurantList restaurants={paginatedRestaurants} />
                        </Grid>
                    </Grid>
                </Grid>
                <Box mt={2} display="flex" justifyContent="center">
                    <Pagination 
                        count={Math.ceil(restaurants.length / ITEMS_PER_PAGE)} 
                        page={page} 
                        onChange={handleChangePage} 
                        color="primary" 
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default HomePage;
